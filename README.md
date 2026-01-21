# AcrnLive 
This repository contains the files for [https://acrnlive.web.app](https://acrnlive.web.app). The streaming site for Ohio University's student run college internet radio station. This README is made for future maintainers of the site, and provides instructions for setup, hosting migration, and maintainence. 
# Site Migration Guide
This project uses:
- **Svelte CLI (`sv`) v0.9.9**
- Node.js v22.15.0
- NPM v10.9.2

If you dont yet have these installed check out the [svelte documentation](https://svelte.dev/docs/cli/overview)

If you have no experience with a CLI you can download a pre-built version of the site that currently only works on firebase. It's located in the release section, which includes detailed usage instructions.

## Setup Instructions
1. Clone this repo:
   ```bash
   git clone https://github.com/ElijahBeard/acrn-live.git
   cd acrn-live
2. Install dependencies
    ```bash
    npm install
3. Test 
    ```bash
    npm run dev
## Migration
If you want to move to a different hosting service or have dependancy issues with the setup instructions. It's a safer bet to use the migration script.

```bash
./migrate.sh <new-svelte-app>
```
# StyleGuide
The ACRN style guide should be available in any exec drive folder. 
## Assets
If you need access to web assets, they are on the visuals department google drive. Also available in `static/images/`
### Colors
>
> Primary Red - #B8252D
> 
> Secondary Red - #FB3B45
> 
> Dark Grey - #2E2E2E
> 
> Grey - #757575
> 
> White - #FFFFFF
>
> Black - #000000

# Contact
You can email me at elijahbeard24@gmail.com if you have any questions regarding this site, or [acrn.com](acrn.com). 
