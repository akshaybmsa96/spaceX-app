/**
 * @description function returns static html with rendered React app
 * @param markup - html from reactDomServer render
 * @param data - initial data to pass to client
 */
export default (markup,data) => {

    return `<!DOCTYPE html lang="en">
                <head>
                    <title>SpaceX App</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <meta name="Description" content="This Application is a spaceX Program">
                    <link rel="stylesheet" href="/css/main.css">
                    <script src="bundle.js" defer></script>
                </head>
                <body>
                    <div id="root">${markup}</div>
                    <script>window.__initialData = ${JSON.stringify(data)}</script>
                </body>
            </html>`
}