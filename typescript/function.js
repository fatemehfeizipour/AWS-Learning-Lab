// ---- Basic Functions ----

function SayHello() {
    console.log("Hello, Cloud Engineer!");
}

// Calling Function
SayHello();

// ----- Function Parameters-----

function deploytoregion(region) {
    console.log("Deploy to region: " + region);
}

// Calling Function with Parameters
deploytoregion("ca-central-1");

// // ----- Excercise -----

// Function name configureService

function configureService(serviceName, tier) {
    console.log("Configuring " + serviceName + " service with tier " + tier);
}

configureService("EC2", "tier3.micro");
configureService("S3", "t3.micro");
configureService("Lambda", "t3.micro");
configureService("DynamoDB", "t3.micro");
