from http.server import HTTPServer, BaseHTTPRequestHandler

from io import BytesIO
import json
import subprocess
import urllib, nturl2path

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):


    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Hellow World')


    def do_POST(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header('Content-Type', 'application/json')
        self.end_headers()

        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)

        comment = ""
        response = subprocess.check_output(["test", self.path])
        self.wfile.write(json.dumps(response))


httpd = HTTPServer(('', 183), SimpleHTTPRequestHandler)
httpd.serve_forever()