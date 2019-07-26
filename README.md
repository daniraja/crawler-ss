# To crawl and capture a website
## Required Softwares
### Install wget

> You'll need `wget` installed on your machine in order to continue. To check if it's already installed (if you're on Linux or a Mac, chances are you already have it) open Git Bash, Terminal, etc. and run the command: `$ wget`. If you receive an error message or command not found, you're probably on Windows. Here's the Windows installation instructions:
* Download the lastest wget binary for windows from [here](https://eternallybored.org/misc/wget/) (they are available as a zip with documentation, or just an `exe`. I'd recommend just the `exe`.)
*	If you downloaded the zip, extract all (if windows built in zip utility gives an error, use 7-zip). If you downloaded the 64-bit version, rename the `wget64.exe` file to `wget.exe`
*	Move `wget.exe` to `C:\Windows\System32\`

### Install nodejs
> Download and install nodejs from https://nodejs.org/en/

### Install Protractor
> `npm install -g protractor`

### Update webdriver
> `webdriver-manager update`

## To fetch urls
Update `HOME` & `DOMAINS` of the website to be crawled `./scripts/crawler.sh` 
> `sh ./scripts/crawler.sh`

## To take screenshots

Open a `terminal` / `command prompt` and start `webdriver`

> `webdriver-manager start`

Open another `terminal` / `command prompt` and run script 

> `npm install`

> `npm run test`

Screenshots wil be captured in `output/images/`

