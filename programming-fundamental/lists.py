# List of EC2 instance
instance_ids = ["i-1234", "i-9012", "i-5678"]

# List of IP addresses for a security group
ip_addresses = ["10.0.0.2", "10.0.0.3"]

# List of availability zones in a region
availability_zones = ["eu-west-1a", "eu-west-2a", "eu-west-2c"]

# Print the lists
#print(f"EC2 instances to terminate: {instance_ids}")
#print(f"First IP addresses: {ip_addresses}")
print(f"Number of AZs: {availability_zones}")

# Add new EC2 instance ID
#instance_ids.append("i-3456")
#print("After adding a new instance ID")
#print("EC2 Instances:", instance_ids)

# Remove EC2 instance ID
#instance_ids.remove("i-1234")
#print("EC2 Instances:", instance_ids)

# Check if an item is in a list
#if "10.0.0.0" in ip_addresses:
    #print("Yes 10.0.0.0 is in and allowed")
#else:
    #print("No 10.0.0.0 is not in the allowed list")
#print("IP addresses:", ip_addresses)

# Slicing a list
#First two AZs
#first_two_azs = availability_zones[:2]
#print("first two Azs:", first_two_azs)

#sorting
#instance_ids.sort()
#print("Sorted EC2 Instances", instance_ids)

# Finding length of a list
#number_of_ips = len(ip_addresses)
#print(f"number of IP addresses: {number_of_ips}")

# Accessing list of Items by index
first_az = availability_zones[0]
second_az = availability_zones[1]
last_az = availability_zones[-1]
another_az = availability_zones[-2]
two_az = availability_zones[2]
print(f"First Az0:", first_az)
print(f"Last Az-1:", last_az)
print(f"two_az2:", two_az)
print(f"second_az1:", second_az)
