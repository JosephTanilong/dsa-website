// ===============================
// DEFAULT VIDEO LIBRARY (hardcoded seed)
// These load for every visitor, not just you.
// ===============================
const defaultVideos = [
    // ── ARRAY ──────────────────────────────────────────
    { id: 1,  title: 'Array Insertion',   category: 'array',      description: 'How elements are inserted into an array, including shifting existing elements to make room.', videoUrl: 'videos/array-insertion.gif' },
    { id: 2,  title: 'Array Deletion',    category: 'array',      description: 'How elements are removed from an array and the array is compacted after deletion.', videoUrl: 'videos/array-deletion.gif' },
    { id: 3,  title: 'Array Transversal', category: 'array',      description: 'Visiting every element in an array from start to finish using index-based iteration.', videoUrl: 'videos/array-transversal.gif' },

    // ── LIST ───────────────────────────────────────────
    { id: 4,  title: 'Linked List Append',  category: 'list',     description: 'Adding a new node to the end of a singly linked list by updating the tail pointer.', videoUrl: 'videos/linkedlist-append.gif' },
    { id: 5,  title: 'Linked List Prepend', category: 'list',     description: 'Inserting a new node at the head of a singly linked list in O(1) time.', videoUrl: 'videos/linkedlist-prepend.gif' },

    // ── MATRIX ─────────────────────────────────────────
    { id: 6,  title: 'Matrix',            category: 'matrix',     description: 'Introduction to 2D arrays (matrices): row/column indexing and common traversal patterns.', videoUrl: 'videos/Matrix.gif' },

    // ── STACKS ─────────────────────────────────────────
    { id: 7,  title: 'Stack Push',        category: 'stacks',     description: 'Pushing an element onto the top of a stack and how the LIFO principle applies.', videoUrl: 'videos/stacks-push.gif' },
    { id: 8,  title: 'Stack Pop',         category: 'stacks',     description: 'Removing and returning the top element of a stack.', videoUrl: 'videos/stacks-pop.gif' },
    { id: 9,  title: 'Stack Peek',        category: 'stacks',     description: 'Reading the top element of a stack without removing it.', videoUrl: 'videos/stacks-peek.gif' },
    { id: 10, title: 'Stack Overflow',    category: 'stacks',     description: 'What happens when you push onto a full stack — causes and prevention.', videoUrl: 'videos/stacks-overflow.gif' },
    { id: 11, title: 'Stack isEmpty',     category: 'stacks',     description: 'Checking whether a stack contains any elements before popping.', videoUrl: 'videos/stacks-isempty.gif' },

    // ── QUEUE ──────────────────────────────────────────
    { id: 12, title: 'Queue Enqueue',     category: 'queue',      description: 'Adding an element to the back of a queue following the FIFO principle.', videoUrl: 'videos/queue-enqueue.gif' },
    { id: 13, title: 'Queue Dequeue',     category: 'queue',      description: 'Removing an element from the front of a queue.', videoUrl: 'videos/queue-dequeue.gif' },

    // ── GRAPH ──────────────────────────────────────────
    { id: 14, title: 'Graph',             category: 'graph',      description: 'Overview of graph data structures: vertices, edges, directed vs undirected, and adjacency representations.', videoUrl: 'videos/Graph.gif' },

    // ── HEAPS ──────────────────────────────────────────
    { id: 15, title: 'Max-Heap Insertion', category: 'heaps',     description: 'Inserting a new element into a max-heap and restoring the heap property by bubbling up.', videoUrl: 'videos/heaps-max-insertion.mp4' },
    { id: 16, title: 'Max-Heap Deletion',  category: 'heaps',     description: 'Removing the maximum element from a max-heap and re-heapifying by sifting down.', videoUrl: 'videos/heaps-max-deletion.mp4' },
    { id: 17, title: 'Min-Heap Insertion', category: 'heaps',     description: 'Inserting into a min-heap and bubbling up to maintain the min-heap invariant.', videoUrl: 'videos/heaps-min-insertion.mp4' },
    { id: 18, title: 'Min-Heap Deletion',  category: 'heaps',     description: 'Extracting the minimum element from a min-heap and restoring the heap property.', videoUrl: 'videos/heaps-min-deletion.mp4' },

    // ── HASH MAP ───────────────────────────────────────
    { id: 19, title: 'Hash Map',           category: 'hashmap',   description: 'How hash maps store key-value pairs using a hash function to compute bucket indices.', videoUrl: 'videos/hashmap.gif' },

    // ── DICTIONARY ────────────────────────────────────
    { id: 20, title: 'Dictionary Insertion', category: 'dictionary', description: 'Adding a new key-value pair to a dictionary and handling collisions.', videoUrl: 'videos/dictionary-insertion.gif' },
    { id: 21, title: 'Dictionary Deletion',  category: 'dictionary', description: 'Removing a key-value pair from a dictionary by key.', videoUrl: 'videos/dictionary-deletion.gif' },
    { id: 22, title: 'Dictionary Lookup',    category: 'dictionary', description: 'Retrieving a value from a dictionary using its key in average O(1) time.', videoUrl: 'videos/dictionary-lookup.gif' },

    // ── MAPS ───────────────────────────────────────────
    { id: 23, title: 'Maps Put',    category: 'maps',             description: 'Inserting or updating a key-value mapping using the put operation.', videoUrl: 'videos/maps-put.mp4' },
    { id: 24, title: 'Maps Remove', category: 'maps',             description: 'Deleting a key-value pair from a map by key.', videoUrl: 'videos/maps-remove.mp4' },

    // ── SORT ───────────────────────────────────────────
    { id: 25, title: 'Bubble Sort',    category: 'sort',          description: 'Repeatedly swapping adjacent elements that are out of order until the list is sorted.', videoUrl: 'videos/sort-bubble.mp4' },
    { id: 26, title: 'Selection Sort', category: 'sort',          description: 'Finding the minimum element and placing it at the correct position on each pass.', videoUrl: 'videos/sort-selection.mp4' },
    { id: 27, title: 'Insertion Sort', category: 'sort',          description: 'Building the sorted array one element at a time by inserting into the correct position.', videoUrl: 'videos/sort-insertion.mp4' },

    // ── SEARCH ─────────────────────────────────────────
    { id: 28, title: 'Linear Search', category: 'search',         description: 'Scanning every element one by one until the target is found — O(n) worst case.', videoUrl: 'videos/searc-linear.gif' },
    { id: 29, title: 'Binary Search', category: 'search',         description: 'Efficiently finding a target in a sorted array by halving the search space each step — O(log n).', videoUrl: 'videos/search-binary.gif' },
];

// Seed localStorage on first visit (or if it's empty)
if (!localStorage.getItem('videos') || JSON.parse(localStorage.getItem('videos')).length === 0) {
    localStorage.setItem('videos', JSON.stringify(defaultVideos));
}

let videos = JSON.parse(localStorage.getItem('videos'));

const videoGrid     = document.getElementById('videoGrid');
const searchBox     = document.getElementById('searchBox');
const filterBtns    = document.querySelectorAll('.filter-btn');
const videoModal    = document.getElementById('videoModal');
const addVideoModal = document.getElementById('addVideoModal');
const closeModal    = document.getElementById('closeModal');
const closeAddModal = document.getElementById('closeAddModal');
const addVideoBtn   = document.getElementById('addVideoBtn');
const addVideoForm  = document.getElementById('addVideoForm');
const noResults     = document.getElementById('noResults');
const headerTitle   = document.getElementById('headerTitle');
const headerCount   = document.getElementById('headerCount');
const videoBackdrop = document.getElementById('videoBackdrop');
const addBackdrop   = document.getElementById('addBackdrop');
const formHeading   = document.getElementById('formHeading');

let currentFilter  = 'array';
let searchTerm     = '';
let editingVideoId = null;
let searchDebounce = null;

// Cache for generated poster frames (videoUrl -> base64 dataURL)
const posterCache = {};

const categoryLabels = {
    array:      'Array',
    list:       'List',
    matrix:     'Matrix',
    stacks:     'Stacks',
    queue:      'Queue',
    tuples:     'Tuples',
    tree:       'Tree',
    graph:      'Graph',
    heaps:      'Heaps',
    hashmap:    'Hash Map',
    dictionary: 'Dictionary',
    maps:       'Maps',
    algorithm:  'Algorithm',
    sort:       'Sort',
    search:     'Search'
};

// ===============================
// CAPTURE FIRST FRAME FROM VIDEO
// Returns a Promise that resolves to a base64 image dataURL
// ===============================
function captureVideoFrame(url) {
    return new Promise(function(resolve) {
        // Return cached poster if already generated
        if (posterCache[url]) {
            resolve(posterCache[url]);
            return;
        }

        var video = document.createElement('video');
        video.src = url;
        video.muted = true;
        video.preload = 'metadata';
        video.crossOrigin = 'anonymous';
        video.currentTime = 0.5; // seek to 0.5s for a better frame

        video.addEventListener('seeked', function() {
            try {
                var canvas = document.createElement('canvas');
                canvas.width  = video.videoWidth  || 320;
                canvas.height = video.videoHeight || 180;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                var dataURL = canvas.toDataURL('image/jpeg', 0.7);
                posterCache[url] = dataURL;
                resolve(dataURL);
            } catch(e) {
                resolve(null); // fallback if cross-origin blocks canvas
            }
            video.remove();
        }, { once: true });

        video.addEventListener('error', function() {
            resolve(null);
            video.remove();
        }, { once: true });

        // Some browsers need load() called
        video.load();
    });
}

// ===============================
// CAPTURE FIRST FRAME FROM GIF
// GIFs are images — just use the src directly as the thumbnail
// ===============================
function getThumbnailHTML(video) {
    // YouTube — static thumbnail from YouTube CDN
    if (video.videoUrl && (video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be'))) {
        var match = video.videoUrl.match(
            /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
        );
        if (match) {
            return '<img src="https://img.youtube.com/vi/' + match[1] + '/hqdefault.jpg" class="thumb-media" loading="lazy" alt="' + video.title + '">';
        }
    }

    // GIF — show first frame by loading it as an <img> (static until played in modal)
    if (video.videoUrl && video.videoUrl.endsWith('.gif')) {
        return '<img src="' + video.videoUrl + '" class="thumb-media" alt="' + video.title + '">';
    }

    // Local video — return placeholder first, then async replace with real poster frame
    if (video.videoUrl && (
        video.videoUrl.endsWith('.mp4') ||
        video.videoUrl.endsWith('.webm') ||
        video.videoUrl.endsWith('.ogg')
    )) {
        // If we already have a cached poster, use it immediately
        if (posterCache[video.videoUrl]) {
            return '<img src="' + posterCache[video.videoUrl] + '" class="thumb-media" alt="' + video.title + '">';
        }
        // Otherwise return placeholder with a data-id so we can swap it after capture
        return '<div class="thumb-placeholder" data-poster-for="' + video.id + '"><span class="thumb-type-label">VIDEO</span></div>';
    }

    return '<div class="thumb-placeholder"><span class="thumb-type-label">-</span></div>';
}

// ===============================
// GENERATE POSTER FRAMES ASYNC
// After render, find all placeholder thumbnails and swap them with real frames
// ===============================
function generatePosters() {
    var placeholders = document.querySelectorAll('[data-poster-for]');
    placeholders.forEach(function(placeholder) {
        var videoId = parseInt(placeholder.getAttribute('data-poster-for'));
        var video   = videos.find(function(v) { return v.id === videoId; });
        if (!video || !video.videoUrl) return;

        captureVideoFrame(video.videoUrl).then(function(dataURL) {
            if (!dataURL) return; // stay as placeholder if capture failed
            // Find the placeholder again (DOM may have changed)
            var el = document.querySelector('[data-poster-for="' + videoId + '"]');
            if (!el) return;
            var img = document.createElement('img');
            img.src       = dataURL;
            img.className = 'thumb-media';
            img.alt       = video.title;
            el.replaceWith(img);
        });
    });
}

// ===============================
// UPDATE SIDEBAR COUNTS
// ===============================
function updateCounts() {
    var counts = {};
    Object.keys(categoryLabels).forEach(function(k) { counts[k] = 0; });
    videos.forEach(function(v) { if (counts[v.category] !== undefined) counts[v.category]++; });

    Object.keys(counts).forEach(function(cat) {
        var el = document.getElementById('count-' + cat);
        if (el) el.textContent = counts[cat];
    });
}

// ===============================
// RENDER VIDEOS
// ===============================
function renderVideos() {
    updateCounts();

    var filteredVideos = videos.filter(function(video) {
        var matchesCategory = currentFilter === 'all' || video.category === currentFilter;
        var matchesSearch =
            video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    var label = currentFilter === 'all' ? 'All Videos' : (categoryLabels[currentFilter] || currentFilter);
    headerTitle.textContent = label;
    headerCount.textContent = filteredVideos.length + (filteredVideos.length === 1 ? ' lesson' : ' lessons');

    if (filteredVideos.length === 0) {
        videoGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    videoGrid.style.display = 'grid';
    noResults.style.display = 'none';

    videoGrid.innerHTML = filteredVideos.map(function(video) {
        var catLabel  = video.categoryLabel || categoryLabels[video.category] || video.category;
        var thumbHTML = getThumbnailHTML(video);

        return '<div class="video-card" data-id="' + video.id + '">' +
            '<div class="card-actions">' +
                '<button class="edit-btn"   data-id="' + video.id + '" title="Edit">Edit</button>' +
                '<button class="delete-btn" data-id="' + video.id + '" title="Delete">Del</button>' +
            '</div>' +
            '<div class="video-thumbnail">' +
                thumbHTML +
                '<div class="play-overlay"><div class="play-circle">&#9654;</div></div>' +
            '</div>' +
            '<div class="video-info">' +
                '<span class="video-category">' + catLabel + '</span>' +
                '<h3 class="video-title">' + video.title + '</h3>' +
                '<p class="video-description">' + video.description.substring(0, 110) + (video.description.length > 110 ? '...' : '') + '</p>' +
            '</div>' +
        '</div>';
    }).join('');

    // Generate poster frames for local videos asynchronously
    generatePosters();

    // Single delegated click handler on the grid
    videoGrid.onclick = function(e) {
        var card = e.target.closest('.video-card');
        if (!card) return;

        if (e.target.closest('.edit-btn')) {
            var videoId = parseInt(e.target.closest('.edit-btn').dataset.id);
            var video   = videos.find(function(v) { return v.id === videoId; });
            if (!video) return;
            editingVideoId = videoId;
            document.getElementById('videoTitle').value       = video.title;
            document.getElementById('videoCategory').value    = video.category;
            document.getElementById('videoUrl').value         = video.videoUrl;
            document.getElementById('videoDescription').value = video.description;
            formHeading.textContent = 'Edit Video';
            addVideoModal.classList.add('active');
            return;
        }

        if (e.target.closest('.delete-btn')) {
            deleteVideo(parseInt(e.target.closest('.delete-btn').dataset.id));
            return;
        }

        openVideoModal(parseInt(card.dataset.id));
    };
}

// ===============================
// OPEN VIDEO MODAL — plays here only
// ===============================
function openVideoModal(videoId) {
    var video = videos.find(function(v) { return v.id === videoId; });
    if (!video) return;

    document.getElementById('modalTitle').textContent       = video.title;
    document.getElementById('modalDescription').textContent = video.description;
    document.getElementById('modalTag').textContent         = video.categoryLabel || categoryLabels[video.category] || video.category;

    var modalVideo = document.getElementById('modalVideo');

    if (!video.videoUrl) {
        modalVideo.innerHTML = '<p style="color:#999;padding:20px;">No video URL provided.</p>';
    } else if (video.videoUrl.endsWith('.gif')) {
        // GIF plays fully in modal
        modalVideo.innerHTML = '<img src="' + video.videoUrl + '" alt="' + video.title + '" style="width:100%;height:100%;object-fit:contain;">';
    } else if (
        video.videoUrl.endsWith('.mp4') ||
        video.videoUrl.endsWith('.webm') ||
        video.videoUrl.endsWith('.ogg')
    ) {
        modalVideo.innerHTML = '<video controls autoplay style="width:100%;height:100%;"><source src="' + video.videoUrl + '" type="video/mp4"></video>';
    } else if (video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be')) {
        var match = video.videoUrl.match(
            /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
        );
        if (match) {
            modalVideo.innerHTML = '<iframe src="https://www.youtube.com/embed/' + match[1] + '?autoplay=1" allowfullscreen style="width:100%;height:100%;border:none;"></iframe>';
        }
    } else {
        modalVideo.innerHTML = '<iframe src="' + video.videoUrl + '" allowfullscreen style="width:100%;height:100%;border:none;"></iframe>';
    }

    videoModal.classList.add('active');
}

// ===============================
// CLOSE VIDEO MODAL — stop playback
// ===============================
function closeVideoModal() {
    videoModal.classList.remove('active');
    document.getElementById('modalVideo').innerHTML = '';
}

// ===============================
// DELETE VIDEO
// ===============================
function deleteVideo(videoId) {
    if (!confirm('Are you sure you want to delete this video?')) return;
    videos = videos.filter(function(v) { return v.id !== videoId; });
    localStorage.setItem('videos', JSON.stringify(videos));
    renderVideos();
}

// ===============================
// CLOSE ADD FORM
// ===============================
function closeAddForm() {
    addVideoModal.classList.remove('active');
    editingVideoId = null;
    addVideoForm.reset();
    formHeading.textContent = 'New Video';
}

// ===============================
// EVENT LISTENERS
// ===============================
closeModal.addEventListener('click',    closeVideoModal);
videoBackdrop.addEventListener('click', closeVideoModal);
closeAddModal.addEventListener('click', closeAddForm);
addBackdrop.addEventListener('click',   closeAddForm);

addVideoBtn.addEventListener('click', function() {
    editingVideoId = null;
    addVideoForm.reset();
    formHeading.textContent = 'New Video';
    addVideoModal.classList.add('active');
});

searchBox.addEventListener('input', function(e) {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(function() {
        searchTerm = e.target.value;
        renderVideos();
    }, 220);
});

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentFilter = btn.dataset.category;
        renderVideos();
    });
});

addVideoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var categoryValue = document.getElementById('videoCategory').value;
    var videoData = {
        title:         document.getElementById('videoTitle').value,
        category:      categoryValue,
        categoryLabel: categoryLabels[categoryValue] || categoryValue,
        description:   document.getElementById('videoDescription').value,
        videoUrl:      document.getElementById('videoUrl').value
    };
    if (editingVideoId) {
        var index = videos.findIndex(function(v) { return v.id === editingVideoId; });
        if (index !== -1) videos[index] = Object.assign({}, videos[index], videoData);
        editingVideoId = null;
        alert('Video updated!');
    } else {
        videos.push(Object.assign({ id: Date.now() }, videoData));
        alert('Video added!');
    }
    localStorage.setItem('videos', JSON.stringify(videos));
    renderVideos();
    closeAddForm();
});

// ===============================
// INIT
// ===============================
renderVideos();