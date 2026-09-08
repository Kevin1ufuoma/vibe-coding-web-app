// 1. CENTRALIZED SYLLABUS DATA STORE (CURRICULUM ARCHIVE)
const COURSE_CURRICULUM_REGISTRY = {
    "html-semantics": {
        title: "HTML5 Semantic Layout Architecture for AI Engines",
        docs: `<h3>Building Predictable Document Objects</h3>
               <p>AI development tools rely on clear syntactic rules to successfully parse and build on codebase targets. By using strict HTML5 blocks (such as <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;aside&gt;</code>), you create clean layout anchors for AI context prompts.</p>
               <h4>Key Logic Concepts:</h4>
               <ul>
                   <li><strong>Scoping Layout Context:</strong> Never rely exclusively on generic structural container divs.</li>
                   <li><strong>Data Attr Controls:</strong> Use semantic labels to easily pipe raw JSON payloads through element boundaries.</li>
               </ul>`,
        videoSrc: "videos/html-semantics-deepdive.mp4",
        task: `<h3>🎯 Objective: Establish a Semantic App Framing Blueprint</h3>
               <p>Write an index structure using clean HTML5 structural layout components. Do not drop nested classes or standard layout wrappers.</p>
               <ol>
                   <li>Create a parent article element containing three distinct section rows.</li>
                   <li>Tag each row with descriptive custom semantic class keys.</li>
               </ol>`
    },
    "html-forms": {
        title: "Input Handlers & Advanced Data Attributes",
        docs: `<h3>Managing AI-Driven Form Data Flow</h3>
               <p>When engineering interfaces that communicate with LLM endpoints, input fields require specialized data validation behaviors to deliver predictable prompt formats.</p>`,
        videoSrc: "videos/html-forms-advanced.mp4",
        task: `<h3>🎯 Objective: Build an AI Prompt Intake Node</h3>
               <p>Construct a multi-input form field layout mapped cleanly with custom data structures.</p>`
    },
    "css-grid": {
        title: "Dynamic Grid Pipelines & Flexbox Systems",
        docs: `<h3>Designing Scalable Screen Frameworks</h3>
               <p>AI generation algorithms can easily break layout formatting if responsive constraints are loose. Master CSS Grid fractions (<code>fr</code>) and structural wrap rules to build bulletproof visual cards.</p>`,
        videoSrc: "videos/css-grid-mastery.mp4",
        task: `<h3>🎯 Objective: Structure a Fluid 3-Pane Web Layout</h3>
               <p>Construct a robust grid dashboard container that collapses into single-column feeds cleanly.</p>`
    },
    "css-media": {
        title: "Mobile Fluid Breakpoints & Media Rules",
        docs: `<h3>Fluid Handheld Interfaces</h3>
               <p>Configure device scaling rules that rearrange the interactive grids smoothly without clipping elements on small phones.</p>`,
        videoSrc: "videos/css-media-fluid.mp4",
        task: `<h3>🎯 Objective: Write a Mobile Layout Breakpoint</h3>
               <p>Create structural media overrides to format lists vertically on displays narrower than 480px.</p>`
    },
    "js-dom": {
        title: "JavaScript DOM Logic Architecture",
        docs: `<h3>Controlling Layout Components via Scripts</h3>
               <p>Learn how to safely grab, filter, and modify document components using standard selectors without creating script conflicts or tracking state bugs.</p>`,
        videoSrc: "videos/js-dom-logic.mp4",
        task: `<h3>🎯 Objective: Build a Dynamic Element Generation Utility</h3>
               <p>Write an active script loop that instantiates individual cards on the screen on a button click event.</p>`
    },
    "js-async": {
        title: "Asynchronous Data Fetching & Micro-APIs",
        docs: `<h3>Handling Promises & Network Streams</h3>
               <p>Master how async/await syntax and fetch commands fetch outside data streams to supply live data widgets smoothly.</p>`,
        videoSrc: "videos/js-async-fetch.mp4",
        task: `<h3>🎯 Objective: Build a Real-Time JSON Fetch Block</h3>
               <p>Construct a function loop that grabs string feeds from a public server endpoint and logs them locally.</p>`
    },
    "jq-effects": {
        title: "jQuery Interaction Layer & Short Event Codes",
        docs: `<h3>Rapid Prototyping and Interaction Mechanics</h3>
               <p>jQuery streamlines script engineering by shortening complex element lookups and event listener chains down to single lines. This compact syntax is ideal for rapid prototyping with text prompts.</p>
               <h4>Key Logic Concepts:</h4>
               <ul>
                   <li><strong>Implicit Iteration Loops:</strong> Operations run on all selected matching targets instantly without manual lookups.</li>
                   <li><strong>Chaining Pipelines:</strong> Link animation rules, class changes, and attribute modifications together inside a single continuous line.</li>
               </ul>`,
        videoSrc: "videos/jquery-effects.mp4",
        task: `<h3>🎯 Objective: Convert JavaScript Listeners into Shorthand Rules</h3>
               <p>Select your active lesson list buttons using the standard dollar-sign selector. Write a smooth click toggle event that adds and removes visual highlight classes using implicit iteration loops.</p>`
    },
    "py-logic": {
        title: "Python Backend Foundations & Logic Control Blocks",
        docs: `<h3>Constructing Scalable Data Processing Algorithms</h3>
               <p>Python shifts development concentration away from browser interface constraints toward structured server-side programming. Its clean syntax relies on indentations instead of curly braces to manage code paths.</p>
               <h4>Key Logic Concepts:</h4>
               <ul>
                   <li><strong>Strict Indentation Scoping:</strong> Blocks of code are defined by spacing rather than markers like brackets.</li>
                   <li><strong>Structured Collection Arrays:</strong> Manage structured data payloads using dictionaries, tuples, and scalable arrays.</li>
               </ul>`,
        videoSrc: "videos/python-foundations.mp4",
        task: `<h3>🎯 Objective: Build a Key-Value JSON Dictionary Filter</h3>
               <p>Write a functional script block that maps incoming student profiles into a key-value dictionary structure. Implement a filtering loop that outputs entries based on matching data conditions.</p>`
    },
    "node-api": {
        title: "Node.js Production Servers & REST Route Handling",
        docs: `<h3>Serving APIs Globally using Server Runtimes</h3>
               <p>Node.js allows you to execute JavaScript directly on the backend operating system. This makes it possible to configure network servers, read and write files, and respond to incoming API requests.</p>
               <h4>Key Logic Concepts:</h4>
               <ul>
                   <li><strong>Event-Driven Non-Blocking I/O:</strong> Applications process multiple connections concurrently on a single thread.</li>
                   <li><strong>RESTful Route Distribution:</strong> Listen on specific system port locations and distribute responses depending on HTTP methods like GET and POST.</li>
               </ul>`,
        videoSrc: "videos/node-api-server.mp4",
        task: `<h3>🎯 Objective: Initialize a Mock JSON Server Listener</h3>
               <p>Configure a network server instance that listens on port 3000. Write a route handler that intercepts incoming GET connections and returns a structured status payload.</p>`
    }
};


// 2. RUNTIME TRACKING PLATFORM STATE
let CURRENT_ACTIVE_TOPIC = null;

// 3. CORE DOM COMPONENT HOOK REGISTRY
const DOM_ELEMENTS = {
    // Top-Level Clock Anchor
    realtimeClock: document.getElementById('realtime-clock'),
    
    // Left/Main Area Panels
    lessonContainer: document.getElementById('dynamic-lesson-display'),
    lessonTitle: document.getElementById('lesson-title'),
    lessonDocs: document.getElementById('lesson-documentation'),
    topicVideoPlayer: document.getElementById('topic-video-player'),
    
    // Verification Interactive Toggles
    chkVideo: document.getElementById('chk-video-watched'),
    chkDocs: document.getElementById('chk-docs-read'),
    
    // Action Workflow Containers
    taskWrapper: document.getElementById('lesson-task-assignment'),
    taskDescription: document.getElementById('task-description'),
    taskTextArea: document.getElementById('task-submission-input'),
    btnSubmitTask: document.getElementById('btn-submit-task'),
    
    // Wide Popup Window Components
    taskModal: document.getElementById('task-modal-overlay'),
    taskModalBody: document.getElementById('task-modal-body'),
    btnCloseModal: document.getElementById('btn-close-task-modal')
};

// 4. REALTIME SYSTEM CLOCK SYNC SYSTEM
function initializeLiveAppClock() {
    function updateClockStream() {
        if (!DOM_ELEMENTS.realtimeClock) return;
        
        const timestamp = new Date();
        
        // High-precision local formatting configuration
        const layoutOptions = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        
        DOM_ELEMENTS.realtimeClock.textContent = timestamp.toLocaleString('en-US', layoutOptions);
        DOM_ELEMENTS.realtimeClock.setAttribute('datetime', timestamp.toISOString());
    }
    
    // Instantly engage tracking loop execution and run every single second
    updateClockStream();
    setInterval(updateClockStream, 1000);
}

// Kickstart global structural engines when code mounts
document.addEventListener('DOMContentLoaded', () => {
    initializeLiveAppClock();
    console.log("System Status: Realtime tracking pipelines engaged successfully.");
});


// 5. SIDEBAR CLICK SYSTEM AND INJECTION ROUTINE
function initializeCurriculumEngine() {
    // Collect all data-topic clickable link targets
    const courseButtons = document.querySelectorAll('.lesson-link');

    courseButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const topicKey = event.currentTarget.getAttribute('data-topic');
            const dataPayload = COURSE_CURRICULUM_REGISTRY[topicKey];

            // Safety check: Exit if the topic dictionary does not exist yet
            if (!dataPayload) {
                alert("Topic content packet is currently being compiled in our next development iteration!");
                return;
            }

            // Remove active style indicator markers from all other elements
            courseButtons.forEach(btn => btn.classList.remove('active-lesson'));
            
            // Add focus border accent to our newly clicked choice
            event.currentTarget.classList.add('active-lesson');

            // Set global tracking pointer references
            CURRENT_ACTIVE_TOPIC = dataPayload;

            // Injected dynamic structure update routines
            DOM_ELEMENTS.lessonTitle.textContent = dataPayload.title;
            DOM_ELEMENTS.lessonDocs.innerHTML = dataPayload.docs;
            DOM_ELEMENTS.topicVideoPlayer.src = dataPayload.videoSrc;

            // Make sure the hidden layout display block transitions into full view
            DOM_ELEMENTS.lessonContainer.classList.remove('hidden-lesson');

            // RESET REQUISITES AND FORMS FOR EVERY FRESH LESSON SELECTION
            DOM_ELEMENTS.chkVideo.checked = false;
            DOM_ELEMENTS.chkDocs.checked = false;
            
            // Re-lock assignments securely
            DOM_ELEMENTS.taskWrapper.className = 'task-locked';
            DOM_ELEMENTS.taskDescription.innerHTML = "Complete the requirements above to unlock your development challenge for this topic.";
            DOM_ELEMENTS.taskTextArea.disabled = true;
            DOM_ELEMENTS.btnSubmitTask.disabled = true;
            DOM_ELEMENTS.btnSubmitTask.textContent = "Locked Task Room";
        });
    });
}

// ⚠️ UPDATE THE INITIALIZATION EVENT DISPATCH AT THE BOTTOM OF YOUR FILE TO INJECT THIS:
document.addEventListener('DOMContentLoaded', () => {
    initializeLiveAppClock();
    initializeCurriculumEngine(); // <-- Fire up the navigation trackers!
    console.log("System Status: Navigation routing pipelines configured successfully.");
});


// 6. PROGRESS VALIDATION & OVERLAY MODAL MANAGER
function initializeValidationEngine() {
    function evaluateProgressState() {
        if (!AppState.currentActiveTopic) return;
        
        // Exact matches to your HTML checkbox IDs
        const isVideoDone = DOM_ELEMENTS.chkVideo.checked;
        const isDocsDone = DOM_ELEMENTS.chkDocs.checked;

        if (isVideoDone && isDocsDone) {
            // Exact matches to your CSS state classes (.task-unlocked)
            DOM_ELEMENTS.taskWrapper.className = 'task-unlocked';
            DOM_ELEMENTS.taskDescription.innerHTML = "<strong>✨ Verification complete!</strong> Click the action button below to unlock and reveal your production workspace assignment task details.";
            DOM_ELEMENTS.btnSubmitTask.disabled = false;
            DOM_ELEMENTS.btnSubmitTask.textContent = "👁️ Click to Reveal Task Guidelines";
        } else {
            // Exact matches to your CSS state classes (.task-locked)
            DOM_ELEMENTS.taskWrapper.className = 'task-locked';
            DOM_ELEMENTS.taskDescription.innerHTML = "Complete the requirements above to unlock your development challenge for this topic.";
            DOM_ELEMENTS.taskTextArea.disabled = true;
            DOM_ELEMENTS.btnSubmitTask.disabled = true;
            DOM_ELEMENTS.btnSubmitTask.textContent = "Locked Task Room";
        }
    }

    DOM_ELEMENTS.chkVideo.addEventListener('change', evaluateProgressState);
    DOM_ELEMENTS.chkDocs.addEventListener('change', evaluateProgressState);

    DOM_ELEMENTS.btnSubmitTask.addEventListener('click', () => {
        if (DOM_ELEMENTS.btnSubmitTask.disabled || !AppState.currentActiveTopic) return;

        // Uses your class tool utility matching your CSS (.modal-hidden)
        if (DOM_ELEMENTS.taskModal.classList.contains('modal-hidden')) {
            DOM_ELEMENTS.taskModalBody.innerHTML = AppState.currentActiveTopic.task;
            DOM_ELEMENTS.taskModal.classList.remove('modal-hidden');
            DOM_ELEMENTS.taskModal.setAttribute('aria-hidden', 'false');
            DOM_ELEMENTS.taskTextArea.disabled = false;
            DOM_ELEMENTS.btnSubmitTask.textContent = "Submit Task & Advance";
            return;
        }

        const solutionText = DOM_ELEMENTS.taskTextArea.value.trim();
        if (!solutionText) {
            alert("⚠️ Workspace Submission Alert: Please paste your code solution block before advancing.");
            return;
        }

        const activeTopicKey = document.querySelector('.lesson-link.active-lesson')?.getAttribute('data-topic');
        const currentUser = AppState.loggedInUser || 'AnonymousCoder';

        if (activeTopicKey) {
            if (!AppState.userProgressDb[currentUser]) AppState.userProgressDb[currentUser] = [];
            if (!AppState.userProgressDb[currentUser].includes(activeTopicKey)) {
                AppState.userProgressDb[currentUser].push(activeTopicKey);
                localStorage.setItem('vibe_progress_store', JSON.stringify(AppState.userProgressDb));
            }
        }

        alert("🏆 Production Task Approved! Your metrics scores have synchronized successfully.");
        DOM_ELEMENTS.taskTextArea.value = '';
        
        // Exact matches to your HTML auth bar tracking IDs
        const fillBar = document.getElementById('progress-bar-fill');
        const lblMetrics = document.getElementById('lbl-progress-metrics');
        if (fillBar && lblMetrics) {
            const completed = AppState.userProgressDb[currentUser]?.length || 0;
            const total = Object.keys(COURSE_CURRICULUM_REGISTRY).length;
            const pct = Math.round((completed / total) * 100);
            fillBar.style.width = `${pct}%`;
            lblMetrics.textContent = `Progress: ${pct}% Complete (${completed}/${total})`;
        }
    });

    DOM_ELEMENTS.btnCloseModal.addEventListener('click', () => {
        DOM_ELEMENTS.taskModal.classList.add('modal-hidden');
        DOM_ELEMENTS.taskModal.setAttribute('aria-hidden', 'true');
    });

        // --- DYNAMIC COMMENT DELEGATION HANDLER ---
    // Targets your exact classroom element tree: .frm-add-comment, .forum-card-comments, and .comment-item
    const feedStream = document.getElementById('community-discussion-feed');
    
    feedStream?.addEventListener('submit', (event) => {
        const commentForm = event.target.closest('.frm-add-comment');
        if (!commentForm) return;

        event.preventDefault();
        // FIXED: Targeted explicitly by type selector to line up perfectly with your text input markup
        const inputField = commentForm.querySelector('input[type="text"]');
        const commentText = inputField?.value.trim();

        if (!commentText) return;

        const commentsContainer = commentForm.closest('.forum-card-comments');
        const headingElement = commentsContainer?.querySelector('h5');
        
        const commentItemNode = document.createElement('div');
        commentItemNode.className = 'comment-item'; // Exact match to your CSS comment structure
        
        const currentAuthor = AppState.loggedInUser || 'You';
        commentItemNode.innerHTML = `<strong>@${currentAuthor}:</strong> ${commentText}`;

        commentsContainer.insertBefore(commentItemNode, commentForm);
        
        if (headingElement) {
            const currentCount = commentsContainer.querySelectorAll('.comment-item').length;
            headingElement.textContent = `Comments (${currentCount})`;
        }

        inputField.value = '';
    });

}



// 7. SANDBOX WORKBENCH PLAYGROUND CONTROLLER
function initializeSandboxEngine() {
    const btnRun = document.getElementById('btn-run-sandbox');
    const btnClear = document.getElementById('btn-clear-sandbox');
    const txtEditor = document.getElementById('txt-sandbox-editor');
    const preConsole = document.getElementById('pre-sandbox-console');

    // Safety verification check: exit if sandbox components aren't loaded
    if (!btnRun || !btnClear || !txtEditor || !preConsole) return;

    // RUN BUTTON TRIGGER EVENT
    btnRun.addEventListener('click', () => {
        const scriptCode = txtEditor.value;
        let logsBuffer = [];

        // Temporarily intercept the standard window console print commands
        const nativeConsoleLog = console.log;
        console.log = function(...argumentsList) {
            logsBuffer.push(argumentsList.map(item => 
                typeof item === 'object' ? JSON.stringify(item) : item
            ).join(' '));
            nativeConsoleLog.apply(console, argumentsList); // Mirror to raw dev tools console
        };

        try {
            // Safely execute the user code inside isolated engine context
            // Using a Function constructor isolates variable scope cleaner than standard eval
            const executionContext = new Function(scriptCode);
            executionContext();

            // Render execution capture logs onto terminal UI screen
            if (logsBuffer.length > 0) {
                preConsole.textContent = logsBuffer.join('\n');
                preConsole.style.color = '#38bdf8'; // Restore normal crisp theme neon blue
            } else {
                preConsole.textContent = "✓ Code executed successfully with 0 terminal log prints.";
                preConsole.style.color = 'var(--clr-accent-success)'; // Success Green indicator
            }
        } catch (runtimeError) {
            // Capture code runtime bugs and route directly into display box
            preConsole.textContent = `❌ Runtime Error: ${runtimeError.message}`;
            preConsole.style.color = 'var(--clr-accent-danger)'; // Bright Alert Red text
        }

        // Always restore the native browser console tool behaviors instantly
        console.log = nativeConsoleLog;
    });

    // CLEAR BUTTON TRIGGER EVENT
    btnClear.addEventListener('click', () => {
        txtEditor.value = '';
        preConsole.textContent = 'Terminal cleared. Waiting for layout script compilation run...';
        preConsole.style.color = 'var(--txt-disabled)';
    });
}

// ⚠️ REGISTER THIS NEW SUB-ENGINE TO THE LOAD LIST AT THE VERY BOTTOM OF APP.JS:
document.addEventListener('DOMContentLoaded', () => {
    initializeLiveAppClock();
    initializeCurriculumEngine();
    initializeValidationEngine();
    initializeSandboxEngine(); // <-- Fire up sandbox script interceptors!
    console.log("System Status: Vibe Editor runtime loops connected.");
});


// ==========================================================================
// 8. GLOBAL COMMUNITY SIDEBAR, REFRESH RECOVERY & PERSISTENCE
// ==========================================================================
function initializeCommunityChatEngines() {
    const communitySidebar = document.getElementById('community-sidebar');
    const btnCloseCommunity = document.getElementById('btn-close-community');
    const chatWindow = document.getElementById('private-chat-window');
    const chatTrigger = document.getElementById('floating-chat-trigger');
    const btnMinimizeChat = document.getElementById('btn-minimize-chat');
    const unreadBadge = document.getElementById('unread-chat-badge');
    const feedStream = document.getElementById('community-discussion-feed');

    // --- A. LOAD PERSISTENT CARDS FROM DISK STORAGE ON REBOOT ---
    function renderCachedForumFeed() {
        if (!feedStream) return;
        
        // Retrieve persistent text array database
        const cachedPosts = JSON.parse(localStorage.getItem('vibe_forum_posts')) || [];
        if (cachedPosts.length === 0) return;

        // Reset list container to prevent duplications
        feedStream.innerHTML = '<h4>Active Topic Thread</h4>';

        cachedPosts.forEach(post => {
            const cardNode = document.createElement('article');
            cardNode.className = 'forum-card';
            
            // Re-render strings safely without breaking memory endpoints
            const imageTemplate = post.image ? `<div class="forum-uploaded-media"><img src="${post.image}" class="forum-attached-img" alt="Attached screenshot"></div>` : '';
            const audioTemplate = post.audio ? `<div class="forum-audio-payload" style="margin: 8px 0;"><audio src="${post.audio}" controls style="width: 100%; height:32px;"></audio></div>` : '';

            cardNode.innerHTML = `
                <header class="forum-card-meta">
                    <strong>@${post.author}</strong>
                    <time>${post.timeDisplay}</time>
                </header>
                ${post.text ? `<p class="forum-card-text">${post.text}</p>` : ''}
                ${imageTemplate}
                ${audioTemplate}
                <section class="forum-card-comments">
                    <h5>Comments (0)</h5>
                    <form class="frm-add-comment" onsubmit="return false;">
                        <input type="text" placeholder="Write a comment reply..." aria-label="Comment content">
                        <button type="submit">Reply</button>
                    </form>
                </section>
            `;
            feedStream.appendChild(cardNode);
        });
    }

    // --- B. SIDEBAR INTERACTION EVENT REGISTRY ---
    chatTrigger?.addEventListener('click', () => {
        communitySidebar?.classList.remove('closed');
        if (chatWindow?.classList.contains('chat-minimized')) {
            chatWindow.classList.remove('chat-minimized');
            if (unreadBadge) unreadBadge.style.display = 'none';
        }
    });

    btnCloseCommunity?.addEventListener('click', () => {
        communitySidebar?.classList.add('closed');
    });

    btnMinimizeChat?.addEventListener('click', (event) => {
        event.stopPropagation();
        chatWindow?.classList.add('chat-minimized');
    });

    // Fire rendering loop immediately on init
    renderCachedForumFeed();
}

// PUBLIC CACHE UTILITY WRITER
function saveForumCardToCache(author, text, imageBase64, audioBase64) {
    const cachedPosts = JSON.parse(localStorage.getItem('vibe_forum_posts')) || [];
    
    const newPostData = {
        author: author,
        text: text,
        image: imageBase64, // Permanent text representation
        audio: audioBase64, // Permanent text audio
        timeDisplay: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    cachedPosts.unshift(newPostData);
    localStorage.setItem('vibe_forum_posts', JSON.stringify(cachedPosts));
}


// ==========================================================================
// 9. AI COMPANION AUDIO ENGINE, TIMERS & POP QUIZ SYSTEM
// ==========================================================================
function initializeAIAssistantEngine() {
    // UI Settings Anchors
    const chkAudio = document.getElementById('chk-ai-audio');
    const txtTrackingStatus = document.getElementById('ai-tracking-status');
    const txtNextAction = document.getElementById('ai-next-action');
    const inputStudyTime = document.getElementById('num-lesson-time');
    const inputBreakTime = document.getElementById('num-break-time');

    // System Cache States
    let studyTimerRunner = null;
    let quizIntervalRunner = null;
    let currentTimerMinutesRemaining = parseInt(inputStudyTime?.value || 45, 10);
    let isCurrentlyOnBreakState = false;

    // A. NATIVE BROWSER AUDIO TEXT-TO-SPEECH EMITTER
    function triggerAIAudioVoice(phraseMessage) {
        // Exit safely if the audio switch is turned off or if SpeechSynthesis is missing
        if (!chkAudio || !chkAudio.checked || !('speechSynthesis' in window)) return;

        // Halt any ongoing voice synthesis loops immediately to prevent queue lines stacking up
        window.speechSynthesis.cancel();

        const speechInstance = new SpeechSynthesisUtterance(phraseMessage);
        speechInstance.rate = 1.0;  // Standard verbal pacing speed
        speechInstance.pitch = 1.0; // Clear tone modulation layout
        
        // Target built-in English voices if present in user device profiles
        const systemVoicesAvailable = window.speechSynthesis.getVoices();
        const preferredVoice = systemVoicesAvailable.find(voice => voice.lang.includes('en'));
        if (preferredVoice) speechInstance.voice = preferredVoice;

        window.speechSynthesis.speak(speechInstance);
    }

    // B. CHRONOMETER SESSION LOOP REGULATOR
    function executeTimerTickLoop() {
        if (currentTimerMinutesRemaining <= 1) {
            // Toggle session states once the countdown finishes
            if (!isCurrentlyOnBreakState) {
                isCurrentlyOnBreakState = true;
                currentTimerMinutesRemaining = parseInt(inputBreakTime?.value || 15, 10);
                
                txtTrackingStatus.innerHTML = `Status: <strong style="color: var(--clr-accent-alert);">Enjoying Recess Break</strong>`;
                triggerAIAudioVoice("Study block achieved successfully. Your scheduled break period begins right now. Go rest your brain!");
            } else {
                isCurrentlyOnBreakState = false;
                currentTimerMinutesRemaining = parseInt(inputStudyTime?.value || 45, 10);
                
                txtTrackingStatus.innerHTML = `Status: <strong style="color: var(--clr-accent-success);">Actively Deep-Focus Coding</strong>`;
                triggerAIAudioVoice("Break time is officially completed. Welcome back to the cockpit. Let's return to your curriculum code!");
            }
        } else {
            currentTimerMinutesRemaining--;
        }

        if (txtNextAction) {
            txtNextAction.innerHTML = `Next Cycle Event: <strong>${currentTimerMinutesRemaining} mins remaining</strong>`;
        }
    }

    // C. DYNAMIC AUTOMATED POP-QUIZ COMPILER
    function dispatchEngagedPopQuiz() {
        const quizBankRegistry = [
            {
                question: "Quick Quiz: Which statement safely converts a string to uppercase in JavaScript?",
                answer: "touppercase()"
            },
            {
                question: "Quick Quiz: Do native string manipulation functions alter the original variable string text array?",
                answer: "no"
            },
            {
                question: "Quick Quiz: Which layout system allocates dimensions using fractions (fr) columns natively?",
                answer: "css grid"
            }
        ];

        // Fetch a random quiz item index
        const randomTargetIndex = Math.floor(Math.random() * quizBankRegistry.length);
        const quizPayload = quizBankRegistry[randomTargetIndex];

        triggerAIAudioVoice("Attention developer! Rapid incoming alert checklist. Pop quiz question incoming on screen!");

        // Display an interactive popup prompt window directly over the screen
        const userSubmission = prompt(`${quizPayload.question}\n\n(Type your clean short response text answer below:)`);

        if (userSubmission !== null) {
            if (userSubmission.trim().toLowerCase() === quizPayload.answer) {
                alert("✨ Correct! Your workspace prompt comprehension scores have updated upwards.");
                triggerAIAudioVoice("Outstanding response validation! Your logical pathing looks perfect.");
            } else {
                alert(`❌ Incorrect. The target expected answer response syntax was: "${quizPayload.answer}"`);
                triggerAIAudioVoice("Incorrect verification feedback. Review your lesson reference sheets again.");
            }
        }
    }

    // D. REINITIALIZE TRACKERS ON VALUE CHANGELOG EVENTS
    function resetTimerPipelineBounds() {
        clearInterval(studyTimerRunner);
        isCurrentlyOnBreakState = false;
        currentTimerMinutesRemaining = parseInt(inputStudyTime?.value || 45, 10);
        
        if (txtTrackingStatus) {
            txtTrackingStatus.innerHTML = `Status: <strong style="color: var(--clr-accent-primary);">Deep Focus Monitoring...</strong>`;
        }
        
        // Simulating rapid-tick tracking updates every 60 seconds for production runtimes
        studyTimerRunner = setInterval(executeTimerTickLoop, 60000); 
        executeTimerTickLoop();
    }

    // Attach tracking change alerts to adjustment fields
    inputStudyTime?.addEventListener('change', resetTimerPipelineBounds);
    inputBreakTime?.addEventListener('change', resetTimerPipelineBounds);

    // Initial Launch Routine Instantiation
    resetTimerPipelineBounds();
    triggerAIAudioVoice("AI Study Assistant Interface fully compiled. Live activity sync pipelines active.");

    // Set up pop quizzes to fire periodically (e.g., every 5 minutes of total user interaction tracking)
    quizIntervalRunner = setInterval(dispatchEngagedPopQuiz, 300000);
}

// ⚠️ MOUNT TO THE ALL-ENGINE INITIALIZATION BOOTSTRAPPER LIST AT THE BASE OF YOUR SCRIPT:
document.addEventListener('DOMContentLoaded', () => {
    initializeLiveAppClock();
    initializeCurriculumEngine();
    initializeValidationEngine();
    initializeSandboxEngine();
    initializeCommunityChatEngines();
    initializeAIAssistantEngine(); // <-- Start up the AI Audio and Timing System!
    
    console.log("=======================================================");
    console.log("⚡ VIBE CODING WORKSPACE BOOT PIPELINES COMPLETE ⚡");
    console.log("All systems are operational and running locally.");
    console.log("=======================================================");
});


// 10. AUTH MANAGEMENT WITH SMOOTH EXPANDING REGISTRATION DRAWER
function initializeAuthenticationSystem() {
    const frmAuth = document.getElementById('frm-auth-gateway');
    const panelProfile = document.getElementById('auth-profile-badge');
    
    // Inputs Selection Hooks
    const txtName = document.getElementById('txt-auth-name');
    const txtEmail = document.getElementById('txt-auth-email');
    const txtUser = document.getElementById('txt-auth-user');
    const txtPass = document.getElementById('txt-auth-pass');
    const txtConfirm = document.getElementById('txt-auth-confirm');
    const chkRemember = document.getElementById('chk-auth-remember');
    
    const btnLogin = document.getElementById('btn-action-login');
    const btnRegister = document.getElementById('btn-action-register');
    
    const lblUser = document.getElementById('lbl-active-user');
    const lblMetrics = document.getElementById('lbl-progress-metrics');
    const fillBar = document.getElementById('progress-bar-fill');
    const errBlock = document.getElementById('auth-error-msg');

    const totalUsersCache = JSON.parse(localStorage.getItem('vibe_auth_store')) || {};
    USER_PROGRESS_DB = JSON.parse(localStorage.getItem('vibe_progress_store')) || {};

    function updateProgressBarUI() {
        if (!LOGGED_IN_USER) return;
        const userCompletedList = USER_PROGRESS_DB[LOGGED_IN_USER] || [];
        const totalTopicsCount = Object.keys(COURSE_CURRICULUM_REGISTRY).length;
        const calculationPercent = Math.round((userCompletedList.length / totalTopicsCount) * 100);
        
        if (fillBar) fillBar.style.width = `${calculationPercent}%`;
        if (lblMetrics) lblMetrics.textContent = `Progress: ${calculationPercent}% Complete (${userCompletedList.length}/${totalTopicsCount})`;
    }

    function toggleAuthUIState(authenticated) {
        if (authenticated) {
            frmAuth.classList.add('auth-alert-hidden');
            panelProfile.classList.remove('auth-profile-hidden');
            if (lblUser) lblUser.textContent = LOGGED_IN_USER;
            updateProgressBarUI();
        } else {
            frmAuth.classList.remove('auth-alert-hidden');
            frmAuth.classList.remove('auth-expanded'); // Collapse drawer on sign out
            if (btnRegister) btnRegister.textContent = "Register Account";
            panelProfile.classList.add('auth-profile-hidden');
            [txtName, txtEmail, txtUser, txtPass, txtConfirm].forEach(input => { if(input) input.value = ''; });
        }
    }

    // SIGN IN CREDENTIALS ACTION HANDLER
    btnLogin?.addEventListener('click', () => {
        // If the registration drawer is open, clicking sign in safely closes it
        if (frmAuth.classList.contains('auth-expanded')) {
            frmAuth.classList.remove('auth-expanded');
            if (btnRegister) btnRegister.textContent = "Register Account";
            hideError();
            return;
        }

        const username = txtUser.value.trim();
        const password = txtPass.value.trim();
        const accountProfile = totalUsersCache[username];
        const cachedPassword = accountProfile?.password || accountProfile;

        if (accountProfile && cachedPassword === password) {
            LOGGED_IN_USER = username;
            
            if (chkRemember && chkRemember.checked) {
                localStorage.setItem('vibe_current_session', username);
            } else {
                sessionStorage.setItem('vibe_current_session', username);
            }

            if (!USER_PROGRESS_DB[username]) USER_PROGRESS_DB[username] = [];
            hideError();
            toggleAuthUIState(true);
        } else {
            showError("Invalid user or secure code credentials match.");
        }
    });

    // SMART INTERACTIVE REGISTER TOGGLE ACTION HANDLER
    btnRegister?.addEventListener('click', () => {
        // Step 1: Open the form drawer smoothly if it is closed
        if (!frmAuth.classList.contains('auth-expanded')) {
            frmAuth.classList.add('auth-expanded');
            btnRegister.textContent = "Complete Sign Up 🚀";
            hideError();
            return;
        }

        // Step 2: If it is already open, collect inputs and run validations
        const name = txtName.value.trim();
        const email = txtEmail.value.trim();
        const username = txtUser.value.trim();
        const password = txtPass.value.trim();
        const confirmPass = txtConfirm.value.trim();

        if (!name || !email || !username || !password || !confirmPass) {
            showError("Please fill out all registration parameters.");
            return;
        }
        if (password !== confirmPass) {
            showError("Passwords do not match! Verification failed.");
            return;
        }
        if (totalUsersCache[username]) {
            showError("This username moniker has already been taken.");
            return;
        }

        // Write user profile data dictionary into storage cache
        totalUsersCache[username] = {
            password: password,
            fullName: name,
            emailAddress: email
        };
        localStorage.setItem('vibe_auth_store', JSON.stringify(totalUsersCache));
        
        USER_PROGRESS_DB[username] = [];
        localStorage.setItem('vibe_progress_store', JSON.stringify(USER_PROGRESS_DB));

        LOGGED_IN_USER = username;

        if (chkRemember && chkRemember.checked) {
            localStorage.setItem('vibe_current_session', username);
        } else {
            sessionStorage.setItem('vibe_current_session', username);
        }

        hideError();
        toggleAuthUIState(true);
    });

    document.getElementById('btn-action-logout')?.addEventListener('click', () => {
        LOGGED_IN_USER = null;
        localStorage.removeItem('vibe_current_session');
        sessionStorage.removeItem('vibe_current_session');
        toggleAuthUIState(false);
    });

    function showError(text) {
        if (!errBlock) return;
        errBlock.textContent = text;
        errBlock.classList.remove('auth-alert-hidden');
    }
    function hideError() {
        errBlock?.classList.add('auth-alert-hidden');
    }

    const savedUserSession = localStorage.getItem('vibe_current_session') || sessionStorage.getItem('vibe_current_session');
    if (savedUserSession && totalUsersCache[savedUserSession]) {
        LOGGED_IN_USER = savedUserSession;
        toggleAuthUIState(true);
    }
}


// ==========================================================================
// 11. CENTRALIZED MEDIA RECORDER ENGINE (BASE64 CONVERTER & PUBLISHER)
// ==========================================================================
function initializeCommunityMediaEngine() {
    const fileImage = document.getElementById('file-post-image');
    const btnRecordForum = document.getElementById('btn-record-community-audio');
    const forumAudioStatus = document.getElementById('community-audio-status');
    const txtPostContent = document.getElementById('txt-post-content');
    const btnSubmitPost = document.getElementById('btn-submit-post');
    const feedStream = document.getElementById('community-discussion-feed');

    const btnRecordDM = document.getElementById('btn-record-dm-audio');
    const dmLogsFrame = document.getElementById('private-chat-messages');

    let hardwareMediaRecorder = null;
    let audioDataChunks = [];
    
    // Memory Cache Strings for Base64 Data
    let compiledImageBase64 = null;
    let compiledForumAudioBase64 = null;

    // --- A. IMAGE TO BASE64 FILE CONVERTER ---
    fileImage?.addEventListener('change', (e) => {
        const fileTarget = e.target.files[0];
        if (!fileTarget || !fileTarget.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            compiledImageBase64 = event.target.result;
            if (forumAudioStatus) {
                forumAudioStatus.textContent = "🖼️ Screenshot linked successfully!";
                forumAudioStatus.style.color = "var(--clr-accent-success)";
            }
        };
        reader.readAsDataURL(fileTarget);
    });

    // --- B. AUDIO MIC RECORD TO BASE64 UTILITY ---
    async function toggleAudioCapture(triggerButton, completionBase64Callback) {
        if (hardwareMediaRecorder && hardwareMediaRecorder.state === "recording") {
            hardwareMediaRecorder.stop();
            return;
        }

        try {
            const rawMicStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioDataChunks = [];
            hardwareMediaRecorder = new MediaRecorder(rawMicStream);

            hardwareMediaRecorder.addEventListener('dataavailable', (e) => {
                if (e.data.size > 0) audioDataChunks.push(e.data);
            });

            hardwareMediaRecorder.addEventListener('stop', () => {
                const rawAudioBlob = new Blob(audioDataChunks, { type: 'audio/mp3' });
                
                // Read audio blobs as Base64 Text tokens to save permanently
                const audioConverterReader = new FileReader();
                audioConverterReader.onloadend = () => {
                    const base64AudioResult = audioConverterReader.result;
                    completionBase64Callback(base64AudioResult);
                };
                audioConverterReader.readAsDataURL(rawAudioBlob);

                rawMicStream.getTracks().forEach(track => track.stop());
                triggerButton.textContent = "🎙️";
            });

            hardwareMediaRecorder.start();
            triggerButton.textContent = "🛑";
        } catch (err) {
            alert("Microphone hardware access denied or disconnected.");
        }
    }

    // --- C. COMMUNITY TIMELINE MIC DISPATCHER ---
    btnRecordForum?.addEventListener('click', () => {
        toggleAudioCapture(btnRecordForum, (base64Audio) => {
            compiledForumAudioBase64 = base64Audio;
            if (forumAudioStatus) {
                forumAudioStatus.textContent = "🎙️ Voice post synthesized!";
                forumAudioStatus.style.color = "var(--clr-accent-primary)";
            }
        });
    });

    // --- D. FLOATING PRIVATE DM CHAT MIC DISPATCHER ---
    btnRecordDM?.addEventListener('click', () => {
        toggleAudioCapture(btnRecordDM, (base64Audio) => {
            if (!dmLogsFrame) return;

            const msgNode = document.createElement('div');
            msgNode.className = 'msg msg-sent';
            msgNode.style.alignSelf = 'flex-end';
            msgNode.style.backgroundColor = 'var(--clr-accent-primary)';
            msgNode.style.width = '80%';
            
            const activeUser = typeof LOGGED_IN_USER === 'string' && LOGGED_IN_USER ? LOGGED_IN_USER : 'You';
            msgNode.innerHTML = `
                <span class="msg-sender" style="color: #0f172a;">@${activeUser} (Voice DM):</span>
                <audio src="${base64Audio}" controls style="width: 100%; height: 28px; margin-top: 4px;"></audio>
            `;
            dmLogsFrame.appendChild(msgNode);
            dmLogsFrame.scrollTop = dmLogsFrame.scrollHeight;
        });
    });

    // --- E. SUBMIT FORUM POST EVENT LISTENER ---
    btnSubmitPost?.addEventListener('click', (e) => {
        e.preventDefault();
        const msgText = txtPostContent.value.trim();

        if (!msgText && !compiledImageBase64 && !compiledForumAudioBase64) return;

        const currentAuthor = typeof LOGGED_IN_USER === 'string' && LOGGED_IN_USER ? LOGGED_IN_USER : 'AnonymousCoder';

        // Write submission records down safely inside localStorage cache registry array
        saveForumCardToCache(currentAuthor, msgText, compiledImageBase64, compiledForumAudioBase64);

        // Render straight into visible list panel layout card node components
        const postCardNode = document.createElement('article');
        postCardNode.className = 'forum-card';
        
        const imgTag = compiledImageBase64 ? `<div class="forum-uploaded-media"><img src="${compiledImageBase64}" class="forum-attached-img"></div>` : '';
        const audioTag = compiledForumAudioBase64 ? `<div class="forum-audio-payload" style="margin: 8px 0;"><audio src="${compiledForumAudioBase64}" controls style="width: 100%; height: 32px;"></audio></div>` : '';

        postCardNode.innerHTML = `
            <header class="forum-card-meta">
                <strong>@${currentAuthor}</strong>
                <time>Just Now</time>
            </header>
            ${msgText ? `<p class="forum-card-text">${msgText}</p>` : ''}
            ${imgTag}
            ${audioTag}
            <section class="forum-card-comments">
                <h5>Comments (0)</h5>
                <form class="frm-add-comment" onsubmit="return false;">
                    <input type="text" placeholder="Write a comment reply..." aria-label="Comment content">
                    <button type="submit">Reply</button>
                </form>
            </section>
        `;

        feedStream?.insertBefore(postCardNode, feedStream.firstChild);

        // Clean out form parameter cache
        txtPostContent.value = '';
        fileImage.value = '';
        compiledImageBase64 = null;
        compiledForumAudioBase64 = null;
        
        if (forumAudioStatus) {
            forumAudioStatus.textContent = "Mic Ready";
            forumAudioStatus.style.color = "var(--txt-secondary)";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeLiveAppClock();
    initializeCurriculumEngine();
    initializeValidationEngine();
    initializeSandboxEngine();
    initializeCommunityChatEngines(); // <-- Handles sidebar layouts & caching hooks
    initializeAIAssistantEngine();
    initializeAuthenticationSystem();
    initializeCommunityMediaEngine();  // <-- Handles image processing & voice records
});




