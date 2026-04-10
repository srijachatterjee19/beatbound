from flask import Flask, jsonify
from prometheus_client import Counter, generate_latest

app = Flask(__name__)

REQUEST_COUNT = Counter('http_requests_total', 'Total Requests')

@app.before_request
def before():
    REQUEST_COUNT.inc()

@app.route("/")
def home():
    return jsonify({"message": "Hello from Flask"})

@app.route("/metrics")
def metrics():
    return generate_latest()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)