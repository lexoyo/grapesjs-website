'use client'

import GrapesEditor from "./GrapesEditor";
import { componentsWebsite, pluginsOptsWebiste, pluginsWebsite } from "./utils";
import '../styles.css';

export default function Demo() {
    return (
        <>
            <script src="https://unpkg.com/grapesjs-preset-webpage@1.0.2"></script>
            <script src="https://unpkg.com/grapesjs-blocks-basic@1.0.1"></script>
            <script src="https://unpkg.com/grapesjs-plugin-forms@2.0.5"></script>
            <script src="https://unpkg.com/grapesjs-component-countdown@1.0.1"></script>
            <script src="https://unpkg.com/grapesjs-plugin-export@1.0.11"></script>
            <script src="https://unpkg.com/grapesjs-tabs@1.0.6"></script>
            <script src="https://unpkg.com/grapesjs-custom-code@1.0.1"></script>
            <script src="https://unpkg.com/grapesjs-touch@0.1.1"></script>
            <script src="https://unpkg.com/grapesjs-parser-postcss@1.0.1"></script>
            <script src="https://unpkg.com/grapesjs-tooltip@0.1.7"></script>
            <script src="https://unpkg.com/grapesjs-tui-image-editor@0.1.3"></script>
            <script src="https://unpkg.com/grapesjs-typed@1.0.5"></script>
            <script src="https://unpkg.com/grapesjs-style-bg@2.0.1"></script>
            <GrapesEditor
                components={componentsWebsite}
                plugins={pluginsWebsite}
                pluginsOpts={pluginsOptsWebiste}
            >
                <link rel="stylesheet" href="/assets/styles/grapesjs/grapesjs-preset-webpage.css"/>
            </GrapesEditor>
        </>
    )
}