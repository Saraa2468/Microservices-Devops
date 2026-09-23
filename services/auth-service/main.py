from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"service": "Auth Service", "status": "healthy"}

@app.get("/login")
def login():
    return {"message": "User authenticated successfully"}