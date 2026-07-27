# Dictionaries
# - Store and retrive information
# - Key and Values

# EC2
ec2_instance = {
    "InstanceId": "i-12434tf4",
    "InstanceType": "t2.micro",
    "State": "running",
    "PublicIpAddress": "232424"
}

instance_id = ec2_instance["InstanceId"]
#print(f"this is a {instance_id} instance")

public_ip = ec2_instance.get("PublicIpAddress", "No public Ip address is here")
#print(f"the instance public ip is: {public_ip}")

# Adding a new key-value pair
ec2_instance["Availabilityzone"] = "ca-central-1"

print(ec2_instance)

# Using pop()
rm_instance_type = ec2_instance.pop("InstanceType")
print(f"remove instance type: {rm_instance_type}")
print(ec2_instance)

# Using Del
del ec2_instance["Availabilityzone"]
#print(f"del ec2 instance: {del_ec2_instance}")
print(ec2_instance)

