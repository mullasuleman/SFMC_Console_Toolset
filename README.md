## How to use?

- Login to Marketing Cloud Engagement, go to Email Studio > Subscribers > Data Extensions
- Right click anywhere inside the "Data Extension" window (right hand side, where the data extension list is displayed), then click "Inspect".
- Go to Console.
- Paste the following script in the console and run

```
var sfmcTools = document.createElement('script');
sfmcTools.src = 'https://cdn.jsdelivr.net/gh/mullasuleman/SFMC_Console_Toolset@main/sfmsToolSet.js';
document.head.appendChild(sfmcTools);
```

**FYI**
- If first-time pasting in console, type "allow pasting" and hit Enter. Otherwise you won't be able to paste anyting into the browser
- You can use `CTRL + SHIFT + C` (Windows) `CMD + SHIFT + C` (Mac) shortcut to quickly inspect any element in the current browser window.  

## Tools

### Scrape and Download DEs
To scarpe all the data extensions from the open folder. 
- Use Scrape DEs to scrape DEs.
- You can change folders and scrape different folders at a time.
- Once you are done, click Download DE List button to download a CSV file with DEs you scraped.

### Scrape and Download Lists
To scarpe all the lists from the open folder. Same functionality as DEs.

### Download DE Schema
To download schema of a data extension including name, path, external key, fields, primary keys, field type, length and default values.
- Open a data extension
- Click Download DE Schema to download schema.

### Download Empty CSV
To download a blank csv with all DE fields as headers which can be used to import test records or as a sample file when setting up an import activity in Automation Studio or in an import definition in Contact Builder. 

- Open a data extension
- Click Download DE Schema to download schema.

This tool will also copy a comma-separated field list to the clipboard if you need to quickly grab all fields from a data extension to use in SQL Query.