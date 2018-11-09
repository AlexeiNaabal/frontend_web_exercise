# -*- coding: UTF-8 -*-
from http.server import HTTPServer, BaseHTTPRequestHandler

from io import BytesIO
import json
import subprocess
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
        file = open('data.json', encoding='gbk')
        content = json.load(file)
        # send = BytesIO().read(content)
        content = json.dumps(content, ensure_ascii=False)
        # content = bytes(content, encoding='utf-8')
        div = content
        div = bytes(div, encoding='utf-8')
        # print(content)
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(div)))
        self.end_headers()
        self.wfile.write(div)


    def do_POST(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Type', 'application/json')
        self.end_headers()

        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)

        jsonVal = body.decode('utf-8').replace("'", '"')
        data = json.loads(jsonVal)

        dumpVal = json.dumps(data, indent=4, ensure_ascii=False)
        print(dumpVal)
        with open("data.json", "w") as file:
            json.dump(data, file, ensure_ascii=False)

httpd = HTTPServer(('', 183), SimpleHTTPRequestHandler)
httpd.serve_forever()