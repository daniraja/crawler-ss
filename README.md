# To crawl and screenshot a website

## Fetch URLs

### Installation WGET

You'll need `wget` installed on your machine in order to continue. To check if it's already installed (if you're on Linux or a Mac, chances are you already have it) open Git Bash, Terminal, etc. and run the command: `$ wget`. 

If you receive an error message or command not found, you're probably on Windows. Here's the Windows installation instructions:
* Download the lastest wget binary for windows from https://eternallybored.org/misc/wget/ (they are available as a zip with documentation, or just an `exe`. I'd recommend just the `exe`.)
*	If you downloaded the zip, extract all (if windows built in zip utility gives an error, use 7-zip). If you downloaded the 64-bit version, rename the `wget64.exe` file to `wget.exe`
*	Move `wget.exe` to `C:\Windows\System32\`

## Run script to fetch url

`sh crawl.sh`

## Run selenium to get screenshots
