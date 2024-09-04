# Webcomponents Quick Start

The Webcomponents Quick Start project is designed to streamline the creation of web components within the UGent UI Design System. By using this template, developers can focus on building feature-rich and consistent UI components, ensuring that they integrate seamlessly with UGent's design language.

## Introduction

This project provides a development environment with minimal configuration and modern development tools. It leverages [Vite]("https://vitejs.dev/") for fast development and building, [LIT](https://lit.dev/) and TypeScript for creating web components, SCSS for styling, and PostCSS for processing and optimizing CSS.

## Features

- A LIT web component example with a property, slotted content, and a CustomEvent.
- [Bootstrap](https://getbootstrap.com/) for consistent styling
- UGent UI Design System Integration
- [PurgeCSS](https://purgecss.com/) integration to remove unused Bootstrap CSS resulting in a smaller component files sizes

## Requirements

Before setting up the project, ensure that the following tools are installed on your machine:

- Node.js (version 18+): [Download Node.js](https://nodejs.org/en/)
- Npm: npm is installed automatically with Node.js. To verify, run:

```bash
node -v
npm -v
```

## Installation

Follow these steps to set up your development environment:

1. Download the repository as a ZIP:

   - Click the "Code" button, and select "Download ZIP".
   - Extract the ZIP on your local machine.

2. Change into the project directory:

   ```bash
   cd Webcomponents-Quick-Start
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The index.html will be served on http://localhost:5173, the entry point to this application.

## Development

Develop your components in the `src` directory. Any changes you make will automatically reload the browser.

Refer to `src/my-element.ts` as a starting point for your components logic and `src/style.scss` for styling and ensure you follow the UGent UI Design System guidelines.

Preview your component by adding it to the `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head
    <script type="module" src="/src/my-element.ts"></script>
  </head>
  <body>
    <my-element></my-element>
  </body>
</html>
```

**Recources**:

- [UGent UI Design System](https://universiteitgent.atlassian.net/wiki/spaces/TFRONTDEV/pages/27460052/UGent+UI+Design+System)
- [Lit Introduction](https://lit.dev/docs/)
- [Vite Getting Started](https://vitejs.dev)
- [Customize Bootstrap](https://getbootstrap.com/docs/5.3/customize/overview/)

## Building for production

When it is time to build your component for production, simply run the following command to bundle and optimize your code, making it available in the `dist` folder.

```bash
npm run build
```

Preview your bundled component by running `npm run preview`. This command will boot up a local static web server that serves the files from `dist` at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.

```bash
npm run preview
```

## Publishing a Component to the UGent UI GitHub Organization and Npm

To make our components available to the wider UGent community, we have [a public code repository](https://github.com/UGentUI/) for the UGent UI Design System. For easy integration in other projects we publish our components to the npm Registry.

1. Prepare for Publishing:

   - Write extensive documentation in the README, including installation instructions and usage examples.

   - Ensure your `vite.config.js` is configured correctly for production builds. This involves setting up the build property to specify the file name without the hash so it can be easily referenced.

     ```javascript
     // vite.config.js
     import { defineConfig } from "vite";

     export default defineConfig({
       build: {
         rollupOptions: {
           output: {
             entryFileNames: "assets/my-element.js",
           },
         },
       },
     });
     ```

   - Ensure your package.json includes necessary fields such as name, version, description, main, and files.

     ```json
     {
         "name": "@ugent-ui/my-element",
         "version": "1.0.0-beta.1",
         "description": "This is a web component ...",
         "main": "dist/assets/my-element.js",
         "files": [
             "dist/assets/my-element.js"
         ]
         ...
     }
     ```

2. Request an empty private repo in the Github.com UGent UI organisation from an organisation owner.

3. Initialize a new Git repository and add the new UGent UI repository as a remote to your local repository.

   ```bash
   git init
   git remote add origin https://github.com/UGentUI/new-repository-name.git
   ```

4. Create a new branch for your initial setup

   ```
   git checkout -b chore/initial-setup
   ```

5. Commit and push your branch to the repository

   ```bash
   git add .
   git commit -m "Initial setup and development of my-component"
   git push -u origin chore/initial-setup
   ```

   _Note: You may want to split the initial commit into multiple commits_

6. Create a pull request (PR):

   - When your development is complete and you're ready to merge into main, go to the GitHub repository and open a pull request (PR) from your `chore/initial-setup` branch to main.
   - Once reviewed and approved, the PR can be merged into main.

7. An UGent UI organization owner will review your component, make the repository public, adding a demo to Github pages by deploying the `dist` folder with the `Deploy static content to Pages` workflow and publish it to npm upon approval.

8. Your component can now be installed and used in other web projects
   ```bash
   npm i @ugentui/my-element
   ```

## Further Development

After the initial setup is merged into main, follow this workflow for further development:

1. Create a New (Feature) Branch:

   - For each new feature or task, create a new branch off the main branch.
   - Use descriptive branch names based on the type of work being done (e.g., feature/, fix/, chore/, etc.).

   Example:

   ```bash
   git checkout -b feature/my-new-feature
   ```

2. Develop the Feature:

   - Make the necessary changes in the feature branch.
   - Ensure the new feature is well-documented and tested.

3. Commit Changes:

   - Commit frequently with clear, descriptive commit messages.

4. Push the Feature Branch:

   - Push your feature branch to the remote repository.

   ```bash
   git push -u origin feature/my-new-feature
   ```

5. Open a Pull Request (PR):

   - Once the feature is complete, open a PR from your feature/my-new-feature branch to main.
   - Ensure that the PR description includes:
     - What the new feature does.
     - Any dependencies or breaking changes.
     - Testing steps or examples (e.g., link to the GitHub Pages demo if applicable).

6. Reviewing and Merging:

   - An UGent UI organization owner will review your PR and address any feedback or requested changes. Once approved, the feature branch will be merged into main.

7. Repeat for New Features or Fixes:

   - For any further development, create a new branch following the same workflow. This could be for new features (`feature/`), bug fixes (`fix/`), or maintenance tasks (`chore/`).

## Releasing a New Version (Maintainer Responsibility)

Once code has been reviewed and merged into main, a maintainer or release manager should follow these steps to publish a new version:

1. Update the version in package.json based on Semantic Versioning:

   - Patch version (e.g., 1.0.1): for bug fixes.
   - Minor version (e.g., 1.1.0): for backward-compatible new features.
   - Major version (e.g., 2.0.0): for breaking changes.

   Example:

   ```json
   {
     "version": "1.1.0"
   }
   ```

2. Tag the release with the new version:

   ```bash
   git tag v1.1.0
   git push origin v1.1.0
   ```

3. Build the project to generate the production-ready dist folder:

   ```bash
   npm run build
   ```

4. Publish the new version to npm (you will need an npm `authToken` in your .npmrc file for authentication):

   ```bash
   npm publish --access public
   ```

5. Tag the new version as latest:

   - After publishing, tag the release with latest (or another tag as necessary):

   ```bash
   npm dist-tag add @ugent-ui/my-element@1.1.0 latest
   ```

6. Post-release tasks:

   - Update relevant documentation, such as the CHANGELOG.md file.
   - Announce the release to the team or community if applicable.
