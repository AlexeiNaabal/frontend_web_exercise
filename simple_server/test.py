from http.server import HTTPServer, BaseHTTPRequestHandler

from io import BytesIO
import json
import subprocess
import cgi, cgitb
import urllib
import requests

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):

    def do_OPTIONS(self):
        self.send_response(200, 'ok')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        self.end_headers()


    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'Hellow World')


    def do_POST(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)

        form = cgi.FieldStorage()
        cmt = form.getvalue('test')
        # json.loads(body)

        jsonVal = body.decode('utf-8').replace("'", '"')
        data = json.loads(jsonVal)

        dumpVal = json.dumps(data, indent=4)
        # response = subprocess.check_output(["test", self.path])
        # self.wfile.write(json.dumps(response))
        # self.wfile.write(self.rfile.read())
        print(dumpVal)

httpd = HTTPServer(('', 183), SimpleHTTPRequestHandler)
httpd.serve_forever()