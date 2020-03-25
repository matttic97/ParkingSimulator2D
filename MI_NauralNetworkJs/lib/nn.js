function sigmoid (x) {
    return 1 / (1 + Math.exp(-x));
}

function derivative_sigmoid (y) {
    //return sigmoid(x) * (1 - sigmoid(x));
    return y * (1 - y);
}

function calculateGradients(matrix, func, errors, learning_rate){
    let gradients = Matrix.map(matrix, func);
    gradients.multiply(errors);
    gradients.multiply(learning_rate);
    return gradients;
}

function calculateDeltas(gradients, weights){
    return Matrix.multiply(gradients, Matrix.transpose(weights));
}

/**
 * Class for creating and using neural network (feedforward)
 */
class NeuralNetwork_FF {

    /**
     * @param {int, NeuralNetwork_FF} input_nodes number of input nodes or neural network. 
     * @param {int} hidden_nodes number of hiddent nodes.
     * @param {int} output_nodes number of output nodes.
     */    
    constructor (input_nodes, hidden_nodes, output_nodes, learning_rate) {
        if (input_nodes instanceof NeuralNetwork_FF) {
            let network = input_nodes;
            this.input_nodes = network.input_nodes;
            this.hidden_nodes = network.hidden_nodes;
            this.output_nodes = network.output_nodes;
      
            this.weights_ih = network.weights_ih.copy();
            this.weights_ho = network.weights_ho.copy();
      
            this.bias_hidden = network.bias_hidden.copy();
            this.bias_output = network.bias_output.copy();
        }
        else{
            this.input_nodes = input_nodes;
            this.hidden_nodes = hidden_nodes;
            this.output_nodes = output_nodes; 
     
            this.learning_rate = learning_rate;
     
            this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
            this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
            this.weights_ih.randomize();
            this.weights_ho.randomize();
     
            this.bias_hidden = new Matrix(this.hidden_nodes, 1);
            this.bias_output = new Matrix(this.output_nodes, 1);
            this.bias_hidden.randomize();
            this.bias_output.randomize();
        }
    }

    predict(input_raw){
        return this.feedforward(input_raw).output;
    }

    feedforward (input_raw) {
        // make matrix from input
        let inputs = Matrix.fromArray(input_raw); 

        // Generate the hidden outputs
        let hidden = Matrix.multiply(this.weights_ih, inputs); // matrix multiplication    
        hidden.add(this.bias_hidden);                          // add bias of hidden nodes        
        hidden.map(sigmoid);                                   // activation function (sigmoid)

        // Generate output
        let outputs = Matrix.multiply(this.weights_ho, hidden);
        outputs.add(this.bias_output);
        outputs.map(sigmoid);

        return {hidden: hidden, output: outputs};
    }

    train (inputs, targets_raw) {
        // predict
        let output = this.feedforward(inputs);
        let hidden = output.hidden;
        let outputs = output.output;

        let targets = Matrix.fromArray(targets_raw);

        // calculate output gradients
        let output_errors = Matrix.subtract(targets, outputs);
        let output_gradients = calculateGradients(outputs, derivative_sigmoid, output_errors, this.learning_rate);

        // adjust the weights by deltas
        let ho_deltas = calculateDeltas(output_gradients, hidden);
        this.weights_ho.add(ho_deltas);
       
        // calculate hidden layer gradients
        let weight_hoT = Matrix.transpose(this.weights_ho);
        let hidden_errors = Matrix.multiply(weight_hoT, output_errors);
        let hidden_gradients = calculateGradients(hidden, derivative_sigmoid, hidden_errors, this.learning_rate);
       
        // adjust the weights by deltas
        let ih_deltas = calculateDeltas(hidden_gradients, Matrix.fromArray(inputs));
        this.weights_ih.add(ih_deltas);

        // adjust the biases by gradients
        this.bias_output.add(output_gradients);
        this.bias_hidden.add(hidden_gradients);
    }


    copy() {
        return new NeuralNetwork_FF(this);
    }
    
    // Accept an arbitrary function for mutation
    mutate(rate) {
        function mutate(val){
            if(Math.random() < rate) return val + randomGaussian(0, 0.1);
            else return val;
        }
        this.weights_ih.map(mutate);
        this.weights_ho.map(mutate);
        this.bias_hidden.map(mutate);
        this.bias_output.map(mutate);
    }

    serialize(){
        return JSON.stringify(this);
    }

    static deserialze(data){
        if(typeof data == 'string')
            data = JSON.deserialze(data);
        
        let brain = new NeuralNetwork_FF(data.brain);
    }

}