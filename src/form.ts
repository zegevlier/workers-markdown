const indexhtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test input</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            font-size: 16px;
            color: #333;
            background-color: #fff;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .form-header {
            padding: 16px;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
        }
        .form-body {
            padding: 16px;
            box-sizing: border-box;
        }
        .form-footer {
            padding: 16px;
            border-top: 1px solid #ccc;
            box-sizing: border-box;
        }
    </style>
    <script>
        function submitForm() {
            const data = document.getElementById("text").value;
            const request = fetch("/", {
                method: "POST",
                body: data,
            });
            request.then(response => {
                response.text().then(text => {
                    document.getElementById("result").innerHTML = text;
                });
            });
        }
    </script>
</head>
<body>
    <div class="container">
        <div class="form-header">
            <h1>Cloudflare WASI Markdown parser</h1>
        </div>
        <div class="form-body">
            <textarea name="text" id="text" cols="80" rows="10" placeholder="Paste your markdown here"></textarea>
        </div>
        <div class="form-footer">
            <button onclick="submitForm()">Submit</button>
        </div>
        <div id="result"></div>
    </div>
</body>
</html>
`;

export default indexhtml;