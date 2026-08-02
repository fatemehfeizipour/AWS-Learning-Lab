// --- For Loops ---

let regions = ["us-west-1", "us-east-1", "eu-west-1", "ap-southeast-1"];

for (let i = 0; i < regions.length; i++) {
    console.log("Deploying to region: " +regions[i]);
}

// Aray of cloud services

let services = ["Lambda", "DynamoDB", "S3bucket", "EC2"];

for (let i = 0; i < services.length; i++) {
    console.log("configuring the " + services[i] + " service");
}