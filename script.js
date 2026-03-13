
/**
 * 1. DATA SEPARATION (WIKI_DATA)
 * Multi-language support: ES and EN
 */
let currentLang = localStorage.getItem('a11y-wiki-lang') || 'es';

const UI_TEXT = {
    es: {
        skip: "Saltar al contenido principal",
        explore: "Explorar",
        footer: "&copy; 2026 TamboWiki de Accesibilidad.",
        commitment: "Tambo Accessibility Wiki",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
        nav: { home: 'Inicio', issues: 'Issues', toolbox: 'Code Toolbox', benchmarks: 'Reference Sites', links: 'Links & News' }
    },
    en: {
        skip: "Skip to main content",
        explore: "Explore",
        footer: "&copy; 2026 Accessibility Wiki.",
        commitment: "Tambourine Accessibility Wiki",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        nav: { home: 'Home', issues: 'Issues', toolbox: 'Code Toolbox', benchmarks: 'Reference Sites', links: 'Links & News' }
    }
};

const WIKI_DATA = {
    es: {
        home: {
            title: "Dashboard de Accesibilidad",
            description: "Bienvenido a la TamboWiki de Accesibilidad. Aquí encontrarás recursos técnicos, snippets de código, sitios de referencia y guías prácticas diseñadas para asegurar que nuestros productos sean lo más accesibles e inclusivos posible.",
            cards: [
                { id: "issues", title: "Resolución de Issues", desc: "Guía técnica para resolución de errores en Siteimprove y otros.", icon: "🛠️" },
                { id: "toolbox", title: "Code Toolbox", desc: "Snippets de código y componentes accesibles.", icon: "🧰" },
                { id: "benchmarks", title: "Sitios de Referencia", desc: "Referentes internos de accesibilidad y fuentes de inspiración.", icon: "👁️" },
                { id: "links", title: "Links & Noticias", desc: "Repositorio de enlaces de interés y noticias.", icon: "🔗" }
            ]
        },
        issues: {
            title: "Soluciones para Siteimprove <br>y Otros Errores de Accesibilidad",
            description: "Guía técnica para identificar y corregir los fallos de cumplimiento más comunes según las WCAG 2.1.",
            content:`
                <div class="space-y-12 max-w-5xl mx-auto p-6">
                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="skip-link-case">
                        <h2 id="skip-link-case" class="text-xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                            1. Skip to main content link is missing
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">El Problema</h3>
                                <p class="text-slate-600 mb-4">Cuando el enlace de salto no existe o no es el primer elemento interactivo, los usuarios de teclado deben tabular por todo el menú antes de llegar al contenido.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm mb-4">
                                    <code class="text-xs text-red-700 block">&lt;!-- Error: El enlace no es el primero en el DOM --&gt;</code>
                                    <code>&lt;nav&gt;...&lt;/nav&gt;</code><br>
                                    <code>&lt;a href="#main"&gt;Skip to content&lt;/a&gt;</code>
                                </div>
                                <p class="text-xs text-slate-500 italic">Nota: Si el framework impide moverlo al inicio, usa <span class="font-bold text-slate-700 underline">tabindex="1"</span> con precaución.</p>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">La Solución Técnica</h3>
                                <p class="text-slate-600 mb-4">Asegurar que el enlace apunte al ID del contenedor principal (ej. #intro-content).</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;a href="#intro-content" class="skip-to-content" tabindex="1"&gt;SKIP TO CONTENT&lt;/a&gt;</code>
                                </div>
                                <p class="text-xs text-slate-500 italic mt-4">Resultado: El usuario salta directamente al contenido principal al presionar TAB.</p>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="label-match-case">
                        <h2 id="label-match-case" class="text-xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                            2. Visible label and accessible name do not match
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">La Regla (WCAG 2.1)</h3>
                                <p class="text-slate-600 mb-4">El texto visible debe estar incluido íntegramente dentro del <code class="bg-slate-100 px-1">aria-label</code> para no confundir a usuarios de voz.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;!-- Incorrecto: El texto no coincide --&gt;</code><br>
                                    <code>&lt;a aria-label="More info"&gt;Learn more&lt;/a&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Solución Correcta</h3>
                                <p class="text-slate-600 mb-4">El texto visible ("Learn more") debe ser el inicio del nombre accesible.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;a aria-label="Learn more about rooms"&gt;Learn more&lt;/a&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="links-id-case">
                        <h2 id="links-id-case" class="text-xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                            3. Links are not Clearly Identifiable
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">El Problema (SIA-R62)</h3>
                                <p class="text-slate-600 mb-4">Los enlaces que solo se diferencian por el color (sin subrayado ni negrita) son invisibles para personas con daltonismo.</p>
                                <div class="p-4 border rounded-lg bg-slate-50">
                                    <p class="text-slate-700 italic">Ejemplo visual de fallo: <span class="text-blue-500 cursor-pointer">Haz clic aquí</span> (Sin subrayado)</p>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Solución Recomendada</h3>
                                <p class="text-slate-600 mb-4">Usa una combinación de color, subrayado (underline) y cambios en el estado hover.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;a class="font-bold underline hover:no-underline text-blue-700"&gt;...&lt;/a&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="alt-text-case">
                        <h2 id="alt-text-case" class="text-xl font-bold text-purple-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            4. Image missing a text alternative
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Informativa vs Decorativa</h3>
                                <p class="text-slate-600 mb-4">Si la imagen aporta contenido, el <code class="bg-slate-100 px-1">alt</code> debe ser descriptivo. Si es decorativa, debe ser vacío.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700 block">&lt;!-- Incorrecto: Falta alt --&gt;</code>
                                    <code>&lt;img src="vino.jpg"&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Uso Correcto</h3>
                                <p class="text-slate-600 mb-2 font-semibold text-sm italic">Informativa:</p>
                                <div class="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-500 font-mono text-xs mb-3">
                                    <code>&lt;img src="vino.jpg" alt="Botella de vino tinto"&gt;</code>
                                </div>
                                <p class="text-slate-600 mb-2 font-semibold text-sm italic">Decorativa (Líneas, fondos):</p>
                                <div class="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-500 font-mono text-xs">
                                    <code>&lt;img src="pattern.png" alt=""&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="content-missing-case">
                        <h2 id="content-missing-case" class="text-xl font-bold text-rose-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                            5. Content Missing After Heading
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">El Problema</h3>
                                <p class="text-slate-600 mb-4">Los encabezados (H1–H6) deben introducir contenido. Si dos encabezados del mismo nivel aparecen consecutivamente, el primero se considera "vacío" de propósito.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700 block text-xs">&lt;!-- Error: Sin contenido entre los H2 --&gt;</code>
                                    <code>&lt;h2&gt;Spa FAQs&lt;/h2&gt;</code><br>
                                    <code>&lt;h2&gt;Reservations&lt;/h2&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Correct Solution</h3>
                                <p class="text-slate-600 mb-4">Asegúrate de que cada encabezado sea seguido por un párrafo, lista o un subencabezado de menor nivel (H3).</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;h2&gt;Spa FAQs&lt;/h2&gt;</code><br>
                                    <code>&lt;p&gt;Encuentra respuestas a preguntas comunes...&lt;/p&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="landmark-case">
                        <h2 id="landmark-case" class="text-xl font-bold text-cyan-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A2 2 0 013 15.487V6a2 2 0 011.128-1.789l4-2z"></path></svg>
                            6. Text Not Included In An ARIA Landmark
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">El Problema</h3>
                                <p class="text-slate-600 mb-4">Todo el texto debe residir dentro de un "Landmark" (header, nav, main, footer) para que los lectores de pantalla puedan encontrarlo fácilmente.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700 block text-xs">&lt;!-- Texto huérfano --&gt;</code>
                                    <code>&lt;body&gt;</code><br>
                                    <code class="ml-4">&lt;p&gt;Welcome!&lt;/p&gt;</code><br>
                                    <code>&lt;/body&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Fix</h3>
                                <p class="text-slate-600 mb-4">Envuelve el contenido en etiquetas semánticas o usa <code class="bg-slate-100">role="region"</code> con un <code class="bg-slate-100">aria-label</code>.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;main&gt;</code><br>
                                    <code class="ml-4">&lt;p&gt;Welcome!&lt;/p&gt;</code><br>
                                    <code>&lt;/main&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="empty-heading-case">
                        <h2 id="empty-heading-case" class="text-xl font-bold text-amber-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            7. Empty Headings
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Errores Estructurales</h3>
                                <ul class="text-sm text-slate-600 list-disc ml-5 space-y-2">
                                    <li><strong>Etiquetas vacías:</strong> <code class="text-red-600">&lt;h2&gt;&lt;/h2&gt;</code> confunde a los lectores de pantalla. Valida los campos del CMS para ocultar etiquetas sin contenido.</li>
                                    <li><strong>IDs duplicados:</strong> Múltiples elementos compartiendo un ID (ej. <code class="text-red-600">id="title"</code>) rompe la accesibilidad y el funcionamiento de scripts.</li>
                                </ul>
                            </div>
                            <div class="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
                                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Rule Check</p>
                                <p class="text-slate-700">"Cada ID debe ser único en todo el DOM, y cada encabezado debe describir el contenido que le sigue."</p>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="iframe-case">
                        <h2 id="iframe-case" class="text-xl font-bold text-green-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            8. Inline Frame Missing a Text Alternative
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">El Problema</h3>
                                <p class="text-slate-600 mb-4">Los Iframes sin títulos son "cajas negras" para las tecnologías de asistencia. A menudo causado por scripts de terceros (mapas, calendarios).</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;iframe src="..."&gt;&lt;/iframe&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Agrega un <code class="bg-slate-100 px-1">title</code> o <code class="bg-slate-100 px-1">aria-label</code> que describa el contenido del iframe.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;iframe title="Mapa interactivo de ubicación" src="..."&gt;&lt;/iframe&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="h1-case">
                        <h2 id="h1-case" class="text-xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                            9. Element IDs are not unique
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Jerarquía WCAG</h3>
                                <p class="text-slate-600 mb-4">Cuando dos o más elementos del sitio tienen el mismo atributo id, por ejemplo:</p>
                                <p class="text-xs text-red-600 italic">En HTML, cada id debe ser único en toda la página.</p>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Asegura que un único <code class="bg-slate-100">H1</code> sea el líder. Si el título de un widget genera conflicto, cámbialo a un <code class="bg-slate-100">div</code>.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;h1&gt;Nuestros Servicios&lt;/h1&gt;</code><br>
                                    <code class="text-xs text-slate-500">&lt;!-- Título de widget como div para evitar romper la jerarquía --&gt;</code><br>
                                    <code>&lt;div class="h2-style"&gt;Calendario&lt;/div&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="h1-case">
                        <h2 id="h1-case" class="text-xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                            10. Page Does Not Start with Level 1 Heading
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Jerarquía WCAG</h3>
                                <p class="text-slate-600 mb-4">El primer encabezado encontrado en el contenido principal debe ser un <code class="bg-slate-100">H1</code>. Define el tema de toda la página.</p>
                                <p class="text-xs text-red-600 italic">Fallo común: Iniciar un calendario o widget con un H2 antes de que exista un H1.</p>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Asegura que un único <code class="bg-slate-100">H1</code> sea el líder. Si el título de un widget genera conflicto, cámbialo a un <code class="bg-slate-100">div</code>.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;h1&gt;Nuestros Servicios&lt;/h1&gt;</code><br>
                                    <code class="text-xs text-slate-500">&lt;!-- Título de widget como div para evitar romper la jerarquía --&gt;</code><br>
                                    <code>&lt;div class="h2-style"&gt;Calendario&lt;/div&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="form-label-case">
                        <h2 id="form-label-case" class="text-xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            11. Form field missing a label
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">El Problema</h3>
                                <p class="text-slate-600 mb-4">Los campos sin etiqueta impiden que los lectores de pantalla informen al usuario qué debe escribir.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm mb-4">
                                    <code class="text-xs text-red-700 block">&lt;!-- Error: Label no asociado o inexistente --&gt;</code>
                                    <code>&lt;label&gt;Name&lt;/label&gt;</code><br>
                                    <code>&lt;input type="text"&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">La Solución</h3>
                                <p class="text-slate-600 mb-4">Usar <code class="bg-slate-100 px-1">for</code> + <code class="bg-slate-100 px-1">id</code> para vincularlos, o <code class="bg-slate-100 px-1">aria-label</code> si es invisible.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;label for="email"&gt;Email&lt;/label&gt;</code><br>
                                    <code>&lt;input id="email" type="email"&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="table-header-case">
                        <h2 id="table-header-case" class="text-xl font-bold text-blue-500 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            12. No data cells assigned to table header
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Fallo de Asociación</h3>
                                <p class="text-slate-600 mb-4">Ocurre cuando hay encabezados (<code class="bg-slate-100 px-1">th</code>) vacíos o sin celdas de datos relacionadas.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;th&gt;&lt;/th&gt; &lt;!-- Sin contenido --&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Correcta Estructura</h3>
                                <p class="text-slate-600 mb-4">Asegura que cada encabezado describa una columna o fila con datos reales.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;th scope="col"&gt;Producto&lt;/th&gt;</code><br>
                                    <code>&lt;td&gt;Vino Tinto&lt;/td&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="aria-prohibited-case">
                        <h2 id="aria-prohibited-case" class="text-xl font-bold text-red-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            13. ARIA attribute unsupported or prohibited
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Atributos No Permitidos</h3>
                                <p class="text-slate-600 mb-4">Se usan atributos ARIA en elementos que no los soportan por su naturaleza o su "role".</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;span aria-expanded="false"&gt;&lt;/span&gt;</code>
                                    <p class="text-[10px] mt-2 text-slate-500 italic">Nota: Un span no tiene estado expandible nativo.</p>
                                </div>
                            </div>
                            <div class="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
                                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Rule Check</p>
                                <p class="text-slate-700 text-sm">"No uses atributos ARIA innecesarios en elementos nativos que ya tienen esa función (ej. role='button' en un &lt;button&gt;)."</p>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="hidden-focus-case">
                        <h2 id="hidden-focus-case" class="text-xl font-bold text-cyan-700 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            14. Hidden element has focusable content
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Slick Slider Issue</h3>
                                <p class="text-slate-600 mb-4">Ocurre cuando elementos en slides ocultos aún reciben foco. Común si la librería no tiene activada la accesibilidad.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">"accessibility": false</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">La Solución</h3>
                                <p class="text-slate-600 mb-4">Activar explícitamente la opción de accesibilidad en la configuración del script de Slick.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>$('.slider').slick({</code><br>
                                    <code class="ml-4 font-bold">"accessibility": true,</code><br>
                                    <code>...</code><br>
                                    <code>});</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="all-caps-case">
                        <h2 id="all-caps-case" class="text-xl font-bold text-purple-700 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 5v12m0 0H7m2 0h2M3 3L3 3M21 3L21 3M21 21L21 21M3 21L3 21"></path></svg>
                            15. Text in all caps
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Sugerencia (SIA-R72)</h3>
                                <p class="text-slate-600 mb-4">Siteimprove marca como alerta cuando el texto se transforma a mayúsculas mediante CSS.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">text-transform: uppercase;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Recomendación</h3>
                                <p class="text-slate-600 mb-4">Escribe el texto directamente en mayúsculas en el CMS si deseas evitar esta advertencia de Siteimprove.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm text-xs">
                                    <code class="text-slate-500">&lt;!-- Preferible para Siteimprove --&gt;</code><br>
                                    <code>&lt;h2&gt;ESTE ES EL TÍTULO&lt;/h2&gt;</code>
                                </div>
                                <p class="text-[10px] text-slate-500 italic mt-4">Nota: No es una violación de WCAG, sino una sugerencia de legibilidad de la herramienta.</p>
                            </div>
                        </div>
                    </section>
                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="role-context-case">
                        <h2 id="role-context-case" class="text-xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            16. Role not inside the required context
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">El Problema</h3>
                                <p class="text-slate-600 mb-4">Ciertos roles ARIA solo son válidos si están dentro de un contenedor específico. Sin el contexto adecuado, los lectores de pantalla no los interpretan.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm mb-4">
                                    <code class="text-xs text-red-700 block">&lt;!-- Error: listitem fuera de una lista --&gt;</code>
                                    <code>&lt;div role="listitem"&gt;Elemento&lt;/div&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">La Solución</h3>
                                <p class="text-slate-600 mb-4">Coloca el role dentro de su padre requerido (ej. <code class="bg-slate-100">listitem</code> dentro de <code class="bg-slate-100">list</code>).</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;div role="list"&gt;</code><br>
                                    <code class="ml-4">&lt;div role="listitem"&gt;Elemento&lt;/div&gt;</code><br>
                                    <code>&lt;/div&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="page-title-case">
                        <h2 id="page-title-case" class="text-xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            17. Page missing title
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Error Estructural</h3>
                                <p class="text-slate-600 mb-4">Ocurre cuando la etiqueta <code class="bg-slate-100 px-1">&lt;title&gt;</code> falta, está vacía o solo contiene espacios dentro del <code class="bg-slate-100 px-1">&lt;head&gt;</code>.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;title&gt;  &lt;/title&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">La Solución</h3>
                                <p class="text-slate-600 mb-4">Agrega un título claro y descriptivo que identifique el contenido de la página y el nombre del sitio.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;title&gt;Nombre de la página | Nombre del sitio&lt;/title&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="line-height-fixed-case">
                        <h2 id="line-height-fixed-case" class="text-xl font-bold text-amber-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                            18. Line height is fixed
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Valores Fijos (px)</h3>
                                <p class="text-slate-600 mb-4">El uso de valores fijos impide que el interlineado crezca con el texto, causando que las líneas se encimen al hacer zoom.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">line-height: 16px;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">La Solución</h3>
                                <p class="text-slate-600 mb-4">Usa valores relativos sin unidad (multiplicadores) para que el espacio sea proporcional al tamaño de fuente.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>p { line-height: 1.5; }</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="line-height-min-case">
                        <h2 id="line-height-min-case" class="text-xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                            19. Line height is below minimum value
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Interlineado insuficiente</h3>
                                <p class="text-slate-600 mb-4">Valores por debajo de 1.5 en párrafos dificultan la lectura. Accesibilidad requiere un mínimo para legibilidad óptima.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">p { line-height: 1; }</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Valores Recomendados</h3>
                                <p class="text-slate-600 mb-4">Mínimo <code class="bg-slate-100 px-1">1.5</code> para párrafos y <code class="bg-slate-100 px-1">1.2</code> para encabezados grandes.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>h2 { line-height: 1.2; }</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="click-size-case">
                        <h2 id="click-size-case" class="text-xl font-bold text-rose-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"></path></svg>
                            20. Interactive element does not meet enhanced size
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Área de Clic Pequeña</h3>
                                <p class="text-slate-600 mb-4">Las zonas pequeñas complican la interacción para personas con movilidad reducida. Meta: <strong class="text-slate-700">44x44px</strong>.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">.icon { width: 20px; }</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">La Solución</h3>
                                <p class="text-slate-600 mb-4">Aumentar el área mediante padding o dimensiones mínimas en CSS.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>.btn { padding: 10px 12px; }</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="missing-headings-case">
                        <h2 id="missing-headings-case" class="text-xl font-bold text-cyan-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            21. Page missing headings
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Falta de Estructura</h3>
                                <p class="text-slate-600 mb-4">Una página sin encabezados impide que los usuarios de lectores de pantalla naveguen por "puntos de referencia", perdiendo el contexto de qué información es más importante.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700 block">&lt;!-- Mal: Solo texto con formato visual --&gt;</code>
                                    <code>&lt;b&gt;Título del artículo&lt;/b&gt;</code><br>
                                    <code>&lt;p&gt;Contenido del texto...&lt;/p&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">La Solución</h3>
                                <p class="text-slate-600 mb-4">Usa una jerarquía lógica. Cada encabezado debe ir seguido de su contenido correspondiente (párrafos, listas, etc.).</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;h1&gt;Título Principal&lt;/h1&gt;</code><br>
                                    <code class="text-emerald-700 ml-2">&lt;p&gt;Introducción al tema.&lt;/p&gt;</code><br>
                                    <code class="ml-4">&lt;h2&gt;Subtítulo de Sección&lt;/h2&gt;</code><br>
                                    <code class="text-emerald-700 ml-6">&lt;p&gt;Detalle de la sección...&lt;/p&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },
        toolbox: {
            title: "Toolbox de Snippets",
            description: "Funciones y fragmentos de código listos para implementar mejoras de accesibilidad.",
            content: `
    <div class="space-y-16 mt-16 max-w-5xl mx-auto">
        <section aria-labelledby="focus-visible-styles">
            <div class="mb-6">
                <h2 id="focus-visible-styles" class="text-3xl font-black text-slate-900 mb-4">1. Estilos Globales de Foco (Keyboard Nav)</h2>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Asegura que todos los elementos interactivos tengan un indicador visual claro al navegar con el teclado, cumpliendo con los criterios de éxito de la WCAG para el foco visible.
                </p>
            </div>
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-[90vw] mx-auto">
<pre class="!m-0 !rounded-none"><code class="language-css">/** Global Focus Visible Reset **/
* {
  &:focus-visible {
    outline: auto;
    outline-offset: 2px;
  }
}</code></pre>
            </div>
        </section>

        <section aria-labelledby="submenu-focus-styles" class="mt-16">
            <div class="mb-6">
                <h2 id="submenu-focus-styles" class="text-3xl font-black text-slate-900 mb-4">2. Accesibilidad en Subnavegación</h2>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Permite que los submenús se desplieguen no solo al pasar el mouse (<code class="bg-slate-100 px-1 rounded text-indigo-600">:hover</code>), sino también cuando un elemento interno recibe el foco (<code class="bg-slate-100 px-1 rounded text-indigo-600">:focus-within</code>).
                </p>
            </div>
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-[90vw] mx-auto">
<pre class="!m-0 !rounded-none"><code class="language-css">/** Submenu visibility on hover and focus-within **/
.privary-navigation {
  &__item {
    &:focus-within, &:hover {
      .privary-navigation__submenu {
        display: block;
        opacity: 1;
        .privary-navigation__item {
          display: block;
        }
      }
    }
  }
}</code></pre>
            </div>
        </section>

        <section aria-labelledby="section-title" class="mt-16">
            <div class="mb-6">
                <h2 id="section-title" class="text-3xl font-black text-slate-900 mb-4">3. Ajuste de Accesibilidad para Sliders</h2>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Este fragmento gestiona el foco en sliders dinámicos (como Slick), asegurando que los elementos dentro de diapositivas ocultas no sean accesibles mediante la tecla Tab.
                </p>
            </div>
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-[90vw] mx-auto">
<pre class="!m-0 !rounded-none"><code class="language-javascript">/** Accessibility Adjustment for Slider **/
$('.sym-slides').on('init afterChange', function(event, slick){
    const $slides = $(slick.$slides);
    $slides.each(function () {
        const $slide = $(this);
        if ($slide.attr('aria-hidden') === 'true') {
            $slide.find('a, button, input, [tabindex]').attr('tabindex', '-1');
        } else {
            $slide.find('a, button, input, [tabindex]').removeAttr('tabindex');
        }
    });
});</code></pre>
            </div>
        </section>

        <section aria-labelledby="menu-keyboard-nav" class="mt-16">
            <div class="mb-6">
                <h2 id="menu-keyboard-nav" class="text-3xl font-black text-slate-900 mb-4">4. Gestión de Foco en Menú (ADA)</h2>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Controla la navegación por teclado en menús laterales o modales. Evita que el foco "escape" del menú cuando está abierto y gestiona el <code class="bg-slate-100 px-1 rounded text-indigo-600">tabindex</code> de los elementos de fondo para mejorar la experiencia con lectores de pantalla.
                </p>
            </div>
    
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-[90vw] mx-auto">
<pre class="!m-0 !rounded-none"><code class="language-javascript">/** ADA Functionality for Keyboard Navigation in Menu & Website **/
const menu = document.querySelector('#menu-site');
const closeMenuButton = document.querySelector('.js-close-menu');

function handleLastItemTab(e) {
    if (e.key === 'Tab' && !e.shiftKey) { 
        e.preventDefault();
        if (closeMenuButton) closeMenuButton.focus(); 
    }
}

function updateMenuTabIndex() {
    if (!menu) return;
    const isMenuVisible = menu.classList.contains('show');
    const elements = menu.querySelectorAll('.privary-navigation__item a, .secondary-navigation__item a, .address a, .social-media a, .js-close-menu');
    const elementsToHide = document.querySelectorAll('.header__left a.phone, .header__logo, .bookingCMS');

    const tabValue = isMenuVisible ? '0' : '-1';
    const hideTabValue = isMenuVisible ? '-1' : '0';

    elements.forEach((element, index) => {
        element.setAttribute('tabindex', tabValue);
        if (index === elements.length - 1) {
            element.removeEventListener('keydown', handleLastItemTab);
            if (isMenuVisible) element.addEventListener('keydown', handleLastItemTab);
        }
    });

    elementsToHide.forEach(el => el.setAttribute('tabindex', hideTabValue));
}

document.addEventListener('DOMContentLoaded', () => {
    updateMenuTabIndex();
    if (menu) menu.addEventListener('transitionend', updateMenuTabIndex);
    
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', () => {
            const firstHeaderElement = document.querySelector('.header__left a.phone');
            if (firstHeaderElement) firstHeaderElement.focus();
        });
    }
});</code></pre>
            </div>
        </section>
    </div>
`
        },
        benchmarks: {
            title: "Sitios de Referencia",
            description: "Proyectos internos de referencia y fuentes de inspiración",
            content: `
                <div class="space-y-12 mt-8 max-w-6xl mx-auto">
                    
                    <section>
                        <div class="mb-8">
                            <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2">
                                <span class="text-indigo-600">01.</span> Referencias Internas Tambo
                            </h2>
                            <p class="text-slate-600 mt-2">Sitios base y estándares de accesibilidad aplicados en proyectos reales.</p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <a href="https://builders-project.tambo.site/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">Builders Project</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://www.theinnatnewportranch.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">Newport Ranch</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://www.surfandsandresort.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">Surf & Sand Resort</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://www.thedrifthaven.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">The Drift Haven</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://www.tambourine.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">Tambo Site</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://sxm-airport.dev.symphonydmo.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">SXM Airport</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                        </div>
                    </section>

                    <section>
                        <div class="mb-8 pt-8 border-t border-slate-100">
                            <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2">
                                <span class="text-indigo-600">02.</span> Sitios de Inspiración
                            </h2>
                            <p class="text-slate-600 mt-2">Fuentes externas de inspiración visual y usabilidad de alto nivel.</p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <a href="https://www.lasalle.edu/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-indigo-100 bg-indigo-50/30 hover:bg-indigo-50 hover:border-indigo-400 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-indigo-900">La Salle University</span>
                                <svg class="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                        </div>
                    </section>
                </div>
            `
        },
        links: {
            title: "Links & Noticias",
            description: "Recursos externos, herramientas de validación y comunidades de accesibilidad.",
            content: `
                <div class="bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden max-w-5xl mx-auto mt-8">
                    <ul role="list" class="divide-y divide-slate-200">
                        <li>
                            <a href="https://www.siteimprove.com/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors group">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h3 class="text-lg font-bold text-indigo-600 group-hover:underline">Siteimprove Platform</h3>
                                        <p class="text-sm text-slate-500">Herramienta central para la optimización y accesibilidad de nuestros sitios web.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">Official Site</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://learninghub.siteimprove.com/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors group">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h3 class="text-lg font-bold text-indigo-600 group-hover:underline">Siteimprove Academy</h3>
                                        <p class="text-sm text-slate-500">Cursos y certificaciones para mejorar las habilidades en accesibilidad.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">Learning</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.accessibilitychecker.org/guides/wcag/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-indigo-600">What is W3C (WCAG Guide)</p>
                                        <p class="text-sm text-slate-500">Una guía completa para entender las pautas de accesibilidad para el contenido web.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800">Estándares</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.accessibilitychecker.org/blog/section-508/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-indigo-600">Section 508 Compliance</p>
                                        <p class="text-sm text-slate-500">Todo sobre los requisitos legales para la tecnología de la información federal.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Legal</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.accessibilitychecker.org/guides/ada-compliance/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-indigo-600">ADA Compliance Guide</p>
                                        <p class="text-sm text-slate-500">Guía práctica sobre la Ley de Estadounidenses con Discapacidades aplicada a la web.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">Normativa</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://inclusive-components.design/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-indigo-600">Inclusive Components</p>
                                        <p class="text-sm text-slate-500">Un blog sobre el diseño de componentes de interfaz accesibles y robustos.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">Diseño UX</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            `
        }
    },
    en: {
        home: {
            title: "Accessibility Dashboard",
            description: "Welcome to the Tambo Accessibility Wiki. Here you will find technical resources, code snippets, reference sites, and practical guides designed to ensure our products are as accessible and inclusive as possible.",
            cards: [
                { id: "issues", title: "Issues Resolution", desc: "Technical guide to fix errors reported on Siteimprove and others.", icon: "🛠️" },
                { id: "toolbox", title: "Code Toolbox", desc: "Code snippets and accessible components.", icon: "🧰" },
                { id: "benchmarks", title: "Reference Sites", desc: "Internal accessibility references and inspiration sources.", icon: "👁️" },
                { id: "links", title: "Links & News", desc: "Repository of interesting links and news.", icon: "🔗" }
            ]
        },
        issues: {
            title: "Solutions for Siteimprove <br>and Common Accessibility Issues",
            description: "Technical guide to identify and fix the most common compliance failures according to WCAG 2.1.",
            content:`
                <div class="space-y-12 max-w-5xl">
                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="skip-link-case">
                        <h2 id="skip-link-case" class="text-xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                            1. Skip to main content link is missing
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">The Problem</h3>
                                <p class="text-slate-600 mb-4">When the skip link is missing or not the first interactive element, keyboard users must tab through the entire menu before reaching the content.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm mb-4">
                                    <code class="text-xs text-red-700 block">&lt;!-- Error: Link is not the first in the DOM --&gt;</code>
                                    <code>&lt;nav&gt;...&lt;/nav&gt;</code><br>
                                    <code>&lt;a href="#main"&gt;Skip to content&lt;/a&gt;</code>
                                </div>
                                <p class="text-xs text-slate-500 italic">Note: If the framework prevents moving it to the top, use <span class="font-bold text-slate-700 underline">tabindex="1"</span> with caution.</p>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Technical Solution</h3>
                                <p class="text-slate-600 mb-4">Ensure the link points to the main container ID (e.g., #intro-content) and is visually hidden until focused.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;a href="#intro-content" class="skip-to-content" tabindex="1"&gt;SKIP TO CONTENT&lt;/a&gt;</code>
                                </div>
                                <p class="text-xs text-slate-500 italic mt-4">Result: User jumps directly to the main content when pressing TAB.</p>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="label-match-case">
                        <h2 id="label-match-case" class="text-xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                            2. Visible label and accessible name do not match
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">The Rule (WCAG 2.1)</h3>
                                <p class="text-slate-600 mb-4">The visible text must be included at the beginning of the <code class="bg-slate-100 px-1">aria-label</code> to avoid confusing speech-input users.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;!-- Incorrect: Label doesn't match visible text --&gt;</code><br>
                                    <code>&lt;a aria-label="More info"&gt;Learn more&lt;/a&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Correct Solution</h3>
                                <p class="text-slate-600 mb-4">The visible text ("Learn more") should be the start of the accessible name.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;a aria-label="Learn more about rooms"&gt;Learn more&lt;/a&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="links-id-case">
                        <h2 id="links-id-case" class="text-xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                            3. Links are not Clearly Identifiable
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">The Problem (SIA-R62)</h3>
                                <p class="text-slate-600 mb-4">Links that only differ by color (without underlines or bold weight) are invisible to colorblind users.</p>
                                <div class="p-4 border rounded-lg bg-slate-50">
                                    <p class="text-slate-700 italic">Visual fail example: <span class="text-blue-500 cursor-pointer">Click here</span> (No underline)</p>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Recommended Solution</h3>
                                <p class="text-slate-600 mb-4">Use a combination of color, underline, and clear hover/focus states.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;a class="font-bold underline hover:no-underline text-blue-700"&gt;...&lt;/a&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="alt-text-case">
                        <h2 id="alt-text-case" class="text-xl font-bold text-purple-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            4. Image missing a text alternative
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Informative vs Decorative</h3>
                                <p class="text-slate-600 mb-4">If the image provides content, <code class="bg-slate-100 px-1">alt</code> must be descriptive. If it's decorative, it must be empty.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700 block">&lt;!-- Incorrect: Missing alt attribute --&gt;</code>
                                    <code>&lt;img src="wine.jpg"&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Correct Usage</h3>
                                <p class="text-slate-600 mb-2 font-semibold text-sm italic">Informative Image:</p>
                                <div class="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-500 font-mono text-xs mb-3">
                                    <code>&lt;img src="wine.jpg" alt="Bottle of red wine"&gt;</code>
                                </div>
                                <p class="text-slate-600 mb-2 font-semibold text-sm italic">Decorative Image (Lines, icons):</p>
                                <div class="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-500 font-mono text-xs">
                                    <code>&lt;img src="pattern.png" alt=""&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="content-missing-case">
                        <h2 id="content-missing-case" class="text-xl font-bold text-rose-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                            5. Content Missing After Heading
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">The Problem</h3>
                                <p class="text-slate-600 mb-4">Headings (H1–H6) must introduce content. If two headings of the same level appear consecutively, the first one is considered "empty" of purpose.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700 block text-xs">&lt;!-- Error: No content between H2s --&gt;</code>
                                    <code>&lt;h2&gt;Spa FAQs&lt;/h2&gt;</code><br>
                                    <code>&lt;h2&gt;Reservations&lt;/h2&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Correct Solution</h3>
                                <p class="text-slate-600 mb-4">Ensure every heading is followed by a paragraph, list, or a lower-level subheading (H3).</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;h2&gt;Spa FAQs&lt;/h2&gt;</code><br>
                                    <code>&lt;p&gt;Find answers to common questions...&lt;/p&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="landmark-case">
                        <h2 id="landmark-case" class="text-xl font-bold text-cyan-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A2 2 0 013 15.487V6a2 2 0 011.128-1.789l4-2z"></path></svg>
                            6. Text Not Included In An ARIA Landmark
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">The Issue</h3>
                                <p class="text-slate-600 mb-4">All text must reside within a "Landmark" (header, nav, main, footer) so screen readers can find it easily.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700 block text-xs">&lt;!-- Orphan text --&gt;</code>
                                    <code>&lt;body&gt;</code><br>
                                    <code class="ml-4">&lt;p&gt;Welcome!&lt;/p&gt;</code><br>
                                    <code>&lt;/body&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Fix</h3>
                                <p class="text-slate-600 mb-4">Wrap content in semantic tags or use <code class="bg-slate-100">role="region"</code> with an <code class="bg-slate-100">aria-label</code>.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;main&gt;</code><br>
                                    <code class="ml-4">&lt;p&gt;Welcome!&lt;/p&gt;</code><br>
                                    <code>&lt;/main&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="empty-heading-case">
                        <h2 id="empty-heading-case" class="text-xl font-bold text-amber-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            7. Empty Headings
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Structural Errors</h3>
                                <ul class="text-sm text-slate-600 list-disc ml-5 space-y-2">
                                    <li><strong>Empty Tags:</strong> <code class="text-red-600">&lt;h2&gt;&lt;/h2&gt;</code> confuses screen readers. Validate CMS inputs to hide empty tags.</li>
                                    <li><strong>Duplicate IDs:</strong> Multiple elements sharing an ID (e.g., <code class="text-red-600">id="title"</code>) breaks accessibility and scripts.</li>
                                </ul>
                            </div>
                            <div class="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
                                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Rule Check</p>
                                <p class="text-slate-700">"Every ID must be unique across the entire DOM, and every heading must describe the content that follows."</p>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="iframe-case">
                        <h2 id="iframe-case" class="text-xl font-bold text-green-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            8. Inline Frame Missing a Text Alternative
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">The Problem</h3>
                                <p class="text-slate-600 mb-4">Iframes without titles are "black boxes" for assistive technology. Often caused by 3rd-party scripts (maps, calendars).</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;iframe src="..."&gt;&lt;/iframe&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Add a <code class="bg-slate-100 px-1">title</code> or <code class="bg-slate-100 px-1">aria-label</code> describing the iframe's content.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;iframe title="Interactive map" src="..."&gt;&lt;/iframe&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="h1-case">
                        <h2 id="h1-case" class="text-xl font-bold text-indigo-700 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                            9. Element IDs are not unique
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">WCAG Hierarchy</h3>
                                <p class="text-slate-600 mb-4">When two or more elements on the site share the same ID attribute, for example:</p>
                                <p class="text-xs text-red-600 italic">In HTML, every ID must be unique across the entire page.</p>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Ensure a single <code class="bg-slate-100">H1</code> acts as the primary heading. If a widget title causes conflict, change it to a <code class="bg-slate-100">div</code>.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;h1&gt;Our Services&lt;/h1&gt;</code><br>
                                    <code class="text-xs text-slate-500">&lt;!-- Use a div for widget titles to avoid breaking hierarchy --&gt;</code><br>
                                    <code>&lt;div class="h2-style"&gt;Calendar&lt;/div&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="h1-case">
                        <h2 id="h1-case" class="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>
                            10. Page Does Not Start with Level 1 Heading
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">WCAG Hierarchy</h3>
                                <p class="text-slate-600 mb-4">The first heading encountered in the main content must be an <code class="bg-slate-100">H1</code>. It defines the topic of the entire page.</p>
                                <p class="text-xs text-red-600 italic">Common Fail: Starting a calendar or widget with an H2 before any H1 exists.</p>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Ensure a single <code class="bg-slate-100">H1</code> is the lead. If a widget title conflicts, downgrade it to a <code class="bg-slate-100">div</code>.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;h1&gt;Our Services&lt;/h1&gt;</code><br>
                                    <code class="text-xs text-slate-500">&lt;!-- Widget title as div to avoid hierarchy break --&gt;</code><br>
                                    <code>&lt;div class="h2-style"&gt;Calendar&lt;/div&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="form-label-case">
                        <h2 id="form-label-case" class="text-xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            11. Form field missing a label
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">The Problem</h3>
                                <p class="text-slate-600 mb-4">Fields without labels prevent screen readers from informing the user what information should be entered.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm mb-4">
                                    <code class="text-xs text-red-700 block">&lt;!-- Error: Label not associated or missing --&gt;</code>
                                    <code>&lt;label&gt;Name&lt;/label&gt;</code><br>
                                    <code>&lt;input type="text"&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Use <code class="bg-slate-100 px-1">for</code> + <code class="bg-slate-100 px-1">id</code> to link them, or <code class="bg-slate-100 px-1">aria-label</code> if it must be hidden.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;label for="email"&gt;Email&lt;/label&gt;</code><br>
                                    <code>&lt;input id="email" type="email"&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="table-header-case">
                        <h2 id="table-header-case" class="text-xl font-bold text-blue-500 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            12. No data cells assigned to table header
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Association Failure</h3>
                                <p class="text-slate-600 mb-4">Occurs when there are empty headers (<code class="bg-slate-100 px-1">th</code>) or headers without related data cells.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;th&gt;&lt;/th&gt; &lt;!-- Empty header --&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Correct Structure</h3>
                                <p class="text-slate-600 mb-4">Ensure each header describes a row or column with actual data.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;th scope="col"&gt;Product&lt;/th&gt;</code><br>
                                    <code>&lt;td&gt;Red Wine&lt;/td&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="aria-prohibited-case">
                        <h2 id="aria-prohibited-case" class="text-xl font-bold text-red-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            13. ARIA attribute unsupported or prohibited
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Prohibited Attributes</h3>
                                <p class="text-slate-600 mb-4">ARIA attributes are used on elements that do not support them based on their nature or "role".</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;span aria-expanded="false"&gt;&lt;/span&gt;</code>
                                    <p class="text-[10px] mt-2 text-slate-500 italic">Note: A span does not have a native expandable state.</p>
                                </div>
                            </div>
                            <div class="bg-slate-50 p-6 rounded-xl border border-dashed border-slate-300">
                                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Rule Check</p>
                                <p class="text-slate-700 text-sm">"Do not use unnecessary ARIA attributes on native elements that already have that function (e.g., role='button' on a &lt;button&gt;)."</p>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="hidden-focus-case">
                        <h2 id="hidden-focus-case" class="text-xl font-bold text-cyan-700 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            14. Hidden element has focusable content
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Slick Slider Issue</h3>
                                <p class="text-slate-600 mb-4">Occurs when elements in hidden slides still receive focus. Common if the library's accessibility settings are disabled.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">"accessibility": false</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Explicitly enable the accessibility option in the Slick script configuration.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>$('.slider').slick({</code><br>
                                    <code class="ml-4 font-bold">"accessibility": true,</code><br>
                                    <code>...</code><br>
                                    <code>});</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="all-caps-case">
                        <h2 id="all-caps-case" class="text-xl font-bold text-purple-700 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 5v12m0 0H7m2 0h2M3 3L3 3M21 3L21 3M21 21L21 21M3 21L3 21"></path></svg>
                            15. Text in all caps
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Suggestion (SIA-R72)</h3>
                                <p class="text-slate-600 mb-4">Siteimprove flags as a concern when text is transformed to uppercase using CSS.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">text-transform: uppercase;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Recommendation</h3>
                                <p class="text-slate-600 mb-4">Type the text directly in uppercase in the CMS to avoid this Siteimprove warning.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm text-xs">
                                    <code class="text-slate-500">&lt;!-- Preferable for Siteimprove --&gt;</code><br>
                                    <code>&lt;h2&gt;THIS IS THE TITLE&lt;/h2&gt;</code>
                                </div>
                                <p class="text-[10px] text-slate-500 italic mt-4">Note: This is not a WCAG violation, but a readability suggestion from the tool.</p>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="role-context-case">
                        <h2 id="role-context-case" class="text-xl font-bold text-indigo-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                            16. Role not inside the required context
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">The Problem</h3>
                                <p class="text-slate-600 mb-4">Certain ARIA roles are only valid when nested within specific parent roles. Without the correct container, screen readers cannot interpret them correctly.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm mb-4">
                                    <code class="text-xs text-red-700 block">&lt;!-- Error: listitem outside of a list --&gt;</code>
                                    <code>&lt;div role="listitem"&gt;Element&lt;/div&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Fix</h3>
                                <p class="text-slate-600 mb-4">Place the role within its required parent (e.g., <code class="bg-slate-100">listitem</code> inside <code class="bg-slate-100">list</code>).</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;div role="list"&gt;</code><br>
                                    <code class="ml-4">&lt;div role="listitem"&gt;Element&lt;/div&gt;</code><br>
                                    <code>&lt;/div&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="page-title-case">
                        <h2 id="page-title-case" class="text-xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            17. Page missing title
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Structural Error</h3>
                                <p class="text-slate-600 mb-4">Occurs when the <code class="bg-slate-100 px-1">&lt;title&gt;</code> tag is missing, empty, or contains only whitespace inside the <code class="bg-slate-100 px-1">&lt;head&gt;</code>.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">&lt;title&gt;  &lt;/title&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Add a clear and descriptive title that identifies the page content and the site name.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;title&gt;Page Name | Site Name&lt;/title&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="line-height-fixed-case">
                        <h2 id="line-height-fixed-case" class="text-xl font-bold text-amber-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                            18. Line height is fixed
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Fixed Values (px)</h3>
                                <p class="text-slate-600 mb-4">Using fixed values prevents line height from scaling with text, causing lines to overlap when the user zooms in.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">line-height: 16px;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Fix</h3>
                                <p class="text-slate-600 mb-4">Use unitless relative values (multipliers) so the spacing remains proportional to the font size.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>p { line-height: 1.5; }</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="line-height-min-case">
                        <h2 id="line-height-min-case" class="text-xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg>
                            19. Line height is below minimum value
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Insufficient Spacing</h3>
                                <p class="text-slate-600 mb-4">Values below 1.5 for body text hinder readability. Accessibility standards require a minimum for optimal legibility.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">p { line-height: 1; }</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">Recommended Values</h3>
                                <p class="text-slate-600 mb-4">Minimum <code class="bg-slate-100 px-1">1.5</code> for paragraphs and <code class="bg-slate-100 px-1">1.2</code> for large headings.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>h2 { line-height: 1.2; }</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="click-size-case">
                        <h2 id="click-size-case" class="text-xl font-bold text-rose-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"></path></svg>
                            20. Interactive element does not meet enhanced size
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Small Click Target</h3>
                                <p class="text-slate-600 mb-4">Small zones make interaction difficult for people with motor impairments. Target: <strong class="text-slate-700">44x44px</strong>.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700">.icon { width: 20px; }</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Increase the clickable area using padding or minimum CSS dimensions.</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>.btn { padding: 10px 12px; }</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200" aria-labelledby="missing-headings-case">
                        <h2 id="missing-headings-case" class="text-xl font-bold text-cyan-600 mb-6 flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            21. Page missing headings
                        </h2>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h3 class="font-bold text-slate-800 mb-3">Lack of Structure</h3>
                                <p class="text-slate-600 mb-4">A page without headings prevents screen reader users from navigating via "landmarks," losing the context of which information is most important.</p>
                                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 font-mono text-sm">
                                    <code class="text-red-700 block">&lt;!-- Bad: Only text with visual formatting --&gt;</code>
                                    <code>&lt;b&gt;Article Title&lt;/b&gt;</code><br>
                                    <code>&lt;p&gt;Text content...&lt;/p&gt;</code>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold text-emerald-700 mb-3">The Solution</h3>
                                <p class="text-slate-600 mb-4">Use a logical hierarchy. Each heading must be followed by its corresponding content (paragraphs, lists, etc.).</p>
                                <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500 font-mono text-sm">
                                    <code>&lt;h1&gt;Main Heading&lt;/h1&gt;</code><br>
                                    <code class="text-emerald-700 ml-2">&lt;p&gt;Introduction to the topic.&lt;/p&gt;</code><br>
                                    <code class="ml-4">&lt;h2&gt;Section Subheading&lt;/h2&gt;</code><br>
                                    <code class="text-emerald-700 ml-6">&lt;p&gt;Section details...&lt;/p&gt;</code>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            `
        },
        toolbox: {
            title: "Snippet Toolbox",
            description: "Functions and code snippets ready to implement accessibility improvements.",
            content:`
    <div class="space-y-16 mt-16 max-w-5xl mx-auto">
        <section aria-labelledby="focus-visible-styles">
            <div class="mb-6">
                <h2 id="focus-visible-styles" class="text-3xl font-black text-slate-900 mb-4">1. Global Focus Styles (Keyboard Nav)</h2>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Ensures all interactive elements have a clear visual indicator when navigating via keyboard, complying with WCAG success criteria for focus visibility.
                </p>
            </div>
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-[90vw] mx-auto">
<pre class="!m-0 !rounded-none"><code class="language-css">/** Global Focus Visible Reset **/
* {
  &:focus-visible {
    outline: auto;
    outline-offset: 2px;
  }
}</code></pre>
            </div>
        </section>

        <section aria-labelledby="submenu-focus-styles" class="mt-16">
            <div class="mb-6">
                <h2 id="submenu-focus-styles" class="text-3xl font-black text-slate-900 mb-4">2. Sub-navigation Accessibility</h2>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Allows submenus to display not only on mouse <code class="bg-slate-100 px-1 rounded text-indigo-600">:hover</code>, but also when an internal element receives focus (<code class="bg-slate-100 px-1 rounded text-indigo-600">:focus-within</code>).
                </p>
            </div>
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-[90vw] mx-auto">
<pre class="!m-0 !rounded-none"><code class="language-css">/** Submenu visibility on hover and focus-within **/
.privary-navigation {
  &__item {
    &:focus-within, &:hover {
      .privary-navigation__submenu {
        display: block;
        opacity: 1;
        .privary-navigation__item {
          display: block;
        }
      }
    }
  }
}</code></pre>
            </div>
        </section>

        <section aria-labelledby="section-title" class="mt-16">
            <div class="mb-6">
                <h2 id="section-title" class="text-3xl font-black text-slate-900 mb-4">3. Accessibility Adjustment for Sliders</h2>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    This snippet manages focus within dynamic sliders (such as Slick), ensuring that elements inside hidden slides are not accessible via the Tab key.
                </p>
            </div>
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-[90vw] mx-auto">
<pre class="!m-0 !rounded-none"><code class="language-javascript">/** Accessibility Adjustment for Slider **/
$('.sym-slides').on('init afterChange', function(event, slick){
    const $slides = $(slick.$slides);
    $slides.each(function () {
        const $slide = $(this);
        if ($slide.attr('aria-hidden') === 'true') {
            $slide.find('a, button, input, [tabindex]').attr('tabindex', '-1');
        } else {
            $slide.find('a, button, input, [tabindex]').removeAttr('tabindex');
        }
    });
});</code></pre>
            </div>
        </section>

        <section aria-labelledby="menu-keyboard-nav" class="mt-16">
            <div class="mb-6">
                <h2 id="menu-keyboard-nav" class="text-3xl font-black text-slate-900 mb-4">4. Menu Focus Management (ADA)</h2>
                <p class="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Controls keyboard navigation in side menus or modals. It prevents focus from "escaping" the menu when open and manages the <code class="bg-slate-100 px-1 rounded text-indigo-600">tabindex</code> of background elements to improve the screen reader experience.
                </p>
            </div>
    
            <div class="rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-[90vw] mx-auto">
<pre class="!m-0 !rounded-none"><code class="language-javascript">/** ADA Functionality for Keyboard Navigation in Menu & Website **/
const menu = document.querySelector('#menu-site');
const closeMenuButton = document.querySelector('.js-close-menu');

function handleLastItemTab(e) {
    if (e.key === 'Tab' && !e.shiftKey) { 
        e.preventDefault();
        if (closeMenuButton) closeMenuButton.focus(); 
    }
}

function updateMenuTabIndex() {
    if (!menu) return;
    const isMenuVisible = menu.classList.contains('show');
    const elements = menu.querySelectorAll('.privary-navigation__item a, .secondary-navigation__item a, .address a, .social-media a, .js-close-menu');
    const elementsToHide = document.querySelectorAll('.header__left a.phone, .header__logo, .bookingCMS');

    const tabValue = isMenuVisible ? '0' : '-1';
    const hideTabValue = isMenuVisible ? '-1' : '0';

    elements.forEach((element, index) => {
        element.setAttribute('tabindex', tabValue);
        if (index === elements.length - 1) {
            element.removeEventListener('keydown', handleLastItemTab);
            if (isMenuVisible) element.addEventListener('keydown', handleLastItemTab);
        }
    });

    elementsToHide.forEach(el => el.setAttribute('tabindex', hideTabValue));
}

document.addEventListener('DOMContentLoaded', () => {
    updateMenuTabIndex();
    if (menu) menu.addEventListener('transitionend', updateMenuTabIndex);
    
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', () => {
            const firstHeaderElement = document.querySelector('.header__left a.phone');
            if (firstHeaderElement) firstHeaderElement.focus();
        });
    }
});</code></pre>
            </div>
        </section>
    </div>
`
        },
        benchmarks: {
            title: "Reference Websites",
            description: "Internal reference projects and inspiration sources",
            content: `
                <div class="space-y-12 mt-8 max-w-6xl mx-auto">
                    <section>
                        <div class="mb-8">
                            <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2">
                                <span class="text-indigo-600">01.</span> Tambo Internal References
                            </h2>
                            <p class="text-slate-600 mt-2">Base sites and accessibility standards applied in real-world projects.</p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <a href="https://builders-project.tambo.site/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">Builders Project</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://www.theinnatnewportranch.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">Newport Ranch</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://www.surfandsandresort.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">Surf & Sand Resort</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://www.thedrifthaven.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">The Drift Haven</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://www.tambourine.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">Tambo Site</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>

                            <a href="https://sxm-airport.dev.symphonydmo.com/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-slate-700 group-hover:text-indigo-600 transition-colors">SXM Airport</span>
                                <svg class="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                        </div>
                    </section>

                    <section>
                        <div class="mb-8 pt-8 border-t border-slate-100">
                            <h2 class="text-2xl font-black text-slate-900 flex items-center gap-2">
                                <span class="text-indigo-600">02.</span> Inspiration Sites
                            </h2>
                            <p class="text-slate-600 mt-2">External sources of visual inspiration and high-level usability.</p>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <a href="https://www.lasalle.edu/" target="_blank" 
                            class="group flex items-center justify-between p-6 rounded-2xl border border-indigo-100 bg-indigo-50/30 hover:bg-indigo-50 hover:border-indigo-400 hover:shadow-md transition-all">
                                <span class="font-bold text-lg text-indigo-900">La Salle University</span>
                                <svg class="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                        </div>
                    </section>
                </div>
            `
        },
        links: {
            title: "Links & News",
            description: "External resources, validation tools, and accessibility communities.",
            content: `
                <div class="bg-white shadow-sm rounded-2xl border border-slate-200 overflow-hidden max-w-5xl mx-auto mt-8">
                    <ul role="list" class="divide-y divide-slate-200">
                    <li>
                        <a href="https://www.siteimprove.com/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors group">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-lg font-bold text-indigo-600 group-hover:underline">Siteimprove Platform</h3>
                                    <p class="text-sm text-slate-500">Core tool for the optimization and accessibility of our websites.</p>
                                </div>
                                <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">Official Site</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://learninghub.siteimprove.com/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors group">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h3 class="text-lg font-bold text-indigo-600 group-hover:underline">Siteimprove Academy</h3>
                                    <p class="text-sm text-slate-500">Courses and certifications to enhance accessibility skills.</p>
                                </div>
                                <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">Learning</span>
                            </div>
                        </a>
                    </li>
                        <li>
                            <a href="https://www.accessibilitychecker.org/guides/wcag/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-indigo-600">What is W3C (WCAG Guide)</p>
                                        <p class="text-sm text-slate-500">A comprehensive guide to understanding web content accessibility guidelines.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800">Standards</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.accessibilitychecker.org/blog/section-508/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-indigo-600">Section 508 Compliance</p>
                                        <p class="text-sm text-slate-500">Everything about legal requirements for Federal information technology.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Legal</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.accessibilitychecker.org/guides/ada-compliance/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-indigo-600">ADA Compliance Guide</p>
                                        <p class="text-sm text-slate-500">Practical guide on the Americans with Disabilities Act applied to the web.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">Regulatory</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://inclusive-components.design/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-indigo-600">Inclusive Components</p>
                                        <p class="text-sm text-slate-500">A blog about designing accessible and robust interface components.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">UX Design</span>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.deque.com/axe/" target="_blank" class="block hover:bg-slate-50 p-6 transition-colors">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-indigo-600">Axe DevTools</p>
                                        <p class="text-sm text-slate-500">The most popular accessibility testing engine for developers.</p>
                                    </div>
                                    <span class="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-bold text-rose-800">Tooling</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            `
        }
    }
};

/**
 * 2. ROUTER & RENDERING LOGIC
 * Handles dynamic content updates and navigation.
 */
function renderNav() {
    const nav = document.querySelector('nav');
    const mobileMenu = document.getElementById('mobile-menu');
    const currentHash = window.location.hash.replace('#', '') || 'home';
    const ui = UI_TEXT[currentLang];

    const navItems = [
        { id: 'home', label: ui.nav.home },
        { id: 'issues', label: ui.nav.issues },
        { id: 'toolbox', label: ui.nav.toolbox },
        { id: 'benchmarks', label: ui.nav.benchmarks },
        { id: 'links', label: ui.nav.links }
    ];

    const navHtml = navItems.map(item => `
        <a href="#${item.id}" 
            class="text-sm font-bold transition-colors ${currentHash === item.id ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'text-slate-500 hover:text-slate-900'}"
            ${currentHash === item.id ? 'aria-current="page"' : ''}>
            ${item.label}
        </a>
    `).join('');

    const mobileNavHtml = navItems.map(item => `
        <a href="#${item.id}" 
            class="block px-4 py-3 rounded-xl text-base font-bold ${currentHash === item.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}"
            ${currentHash === item.id ? 'aria-current="page"' : ''}>
            ${item.label}
        </a>
    `).join('');

    nav.innerHTML = navHtml;
    mobileMenu.innerHTML = mobileNavHtml;
    
    // Update static UI elements
    document.getElementById('lang-toggle').innerText = currentLang === 'es' ? 'EN' : 'ES';
    document.querySelector('.skip-link').innerText = ui.skip;
    document.getElementById('footer-text').innerHTML = ui.footer;
    document.getElementById('footer-commitment').innerText = ui.commitment;
    document.getElementById('mobile-menu-button').querySelector('.sr-only').innerText = ui.openMenu;
}

function renderPage() {
    const main = document.querySelector('main');
    const hash = window.location.hash.replace('#', '') || 'home';
    const data = WIKI_DATA[currentLang][hash] || WIKI_DATA[currentLang].home;
    const ui = UI_TEXT[currentLang];

    // Update document title for SEO and A11Y
    document.title = `${data.title} | Tambo Accessibility Wiki`;

    let contentHtml = `
        <div class="intro-content mb-16">
            <h1 class="text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">${data.title}</h1>
            <p class="text-xl text-slate-600 max-w-3xl leading-relaxed">${data.description}</p>
        </div>
    `;

    if (hash === 'home') {
        contentHtml += `
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                ${data.cards.map(card => `
                    <a href="#${card.id}" class="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-400 hover:-translate-y-1 transition-all duration-300">
                        <div class="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block" aria-hidden="true">${card.icon}</div>
                        <h2 class="text-xl font-black text-slate-900 mb-2">${card.title}</h2>
                        <p class="text-sm text-slate-500 leading-relaxed">${card.desc}</p>
                        <div class="mt-6 text-indigo-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                            ${ui.explore} 
                            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </div>
                    </a>
                `).join('')}
            </div>
        `;
    } else {
        contentHtml += `<div class="animate-in fade-in slide-in-from-bottom-4 duration-500">${data.content}</div>`;
    }

    main.innerHTML = contentHtml;

    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
    
    // Focus management: Move focus to main for keyboard users after navigation
    if (window.location.hash) {
        main.focus();
    }
    
    renderNav();
    window.scrollTo(0, 0);
}

/**
 * 3. EVENT LISTENERS & INITIALIZATION
 */
window.addEventListener('hashchange', renderPage);

document.addEventListener('DOMContentLoaded', () => {
    renderPage();
    
    // Language toggle logic
    const langBtn = document.getElementById('lang-toggle');
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('a11y-wiki-lang', currentLang);
        renderPage();
    });

    // Mobile menu toggle logic
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const ui = UI_TEXT[currentLang];
    
    btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('hidden');
        
        if (!expanded) {
            btn.innerHTML = `<span class="sr-only">${UI_TEXT[currentLang].closeMenu}</span><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`;
        } else {
            btn.innerHTML = `<span class="sr-only">${UI_TEXT[currentLang].openMenu}</span><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>`;
        }
    });

    // Close mobile menu on link click
    menu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            btn.innerHTML = `<span class="sr-only">${UI_TEXT[currentLang].openMenu}</span><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>`;
        }
    });
});