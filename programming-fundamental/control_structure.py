# Control Structure / Control Flow
instance_running = "broken"

# If Statements
if instance_running == "running":
    print("The ec2 is running")
elif instance_running == "stopped":
    print("The ec2 is stopped")
else:
    print("The ec2 instance is an unexpected state")


# S3
public_access_block = None

# If statement
if public_access_block == True:
    print("Public access blocked")
elif public_access_block == False:
    print("Public access allowed")
else:
    print("The public access is an unexpected state")