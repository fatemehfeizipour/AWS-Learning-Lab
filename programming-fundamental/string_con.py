# Define the AWS account ID
account_id = "12345678"

# Define the project name
project_name = "cloud-project"

#Concatenate strings to form S3 bucket name
bucket_name = account_id + '-' + project_name + "-bucket"

# Print the resulting bucket name
print(f"S3 Bucket Name: {bucket_name}")

# Exercise EC2 String Concatenation

# Environment name prod, dev, staging
environment = "dev"

# application name
application = "appserver"

# instance number
instance_number = "123455555555556"
instance_name = environment + '-' + application + "-instance-" + instance_number
# Concatenate
print("EC2 instance name: " + instance_name)

