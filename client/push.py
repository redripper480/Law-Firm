import os

os.system("git add .")
message = input("Enter Message: ")
os.system(f"git commit -m \"{message}\"")
os.system("git push")