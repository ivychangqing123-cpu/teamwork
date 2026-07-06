from fastapi import FastAPI

app = FastAPI(title="CampusProject API")


@app.get("/health")
def health_check():
    return {"status": "ok"}

