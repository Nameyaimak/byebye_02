<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>Until We Meet Again - Galaxy of Memories</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body {
            font-family: 'Prompt', sans-serif;
            background-color: #0f172a;
            overflow: hidden;
            height: 100vh;
            width: 100vw;
            margin: 0;
            color: white;
            position: relative;
            touch-action: none; 
        }

        /* 🌌 ฉากหลัง */
        .space-bg {
            position: fixed;
            inset: 0;
            background: 
                radial-gradient(circle at 15% 50%, rgba(76, 29, 149, 0.4), transparent 50%),
                radial-gradient(circle at 85% 30%, rgba(219, 39, 119, 0.25), transparent 50%),
                radial-gradient(circle at 50% 80%, rgba(56, 189, 248, 0.15), transparent 50%);
            z-index: 0;
            filter: blur(40px);
            animation: nebula-move 20s infinite alternate ease-in-out;
        }

        .stars {
            position: fixed;
            inset: 0;
            background-image: 
                radial-gradient(1px 1px at 10% 10%, white 100%, transparent),
                radial-gradient(1px 1px at 20% 40%, white 100%, transparent),
                radial-gradient(2px 2px at 40% 60%, white 100%, transparent),
                radial-gradient(1px 1px at 60% 20%, white 100%, transparent),
                radial-gradient(2px 2px at 80% 80%, white 100%, transparent);
            background-size: 300px 300px;
            opacity: 0.5;
            z-index: 1;
            animation: twinkle 5s infinite alternate;
        }
        
        @keyframes nebula-move {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        @keyframes twinkle {
            0% { opacity: 0.3; transform: translateY(0); }
            100% { opacity: 0.6; transform: translateY(-10px); }
        }

        #galaxy-container {
            position: relative;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            perspective: 1000px;
            z-index: 10;
        }

        /* ☀️ ดวงอาทิตย์ตรงกลาง */
        .sun-center {
            position: absolute;
            z-index: 50;
            width: 16vmin; 
            height: 16vmin;
            max-width: 140px; max-height: 140px;
            min-width: 90px; min-height: 90px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #ffffff, #fef3c7 40%, #fcd34d 100%);
            box-shadow: 
                0 0 60px rgba(251, 191, 36, 0.5), 
                inset 0 0 30px rgba(255, 255, 255, 0.9),
                0 0 100px rgba(251, 191, 36, 0.2);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            animation: sun-pulse 4s infinite ease-in-out;
            cursor: pointer;
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            color: #92400e;
            border: 2px solid rgba(255,255,255,0.8);
        }
        .sun-center:hover {
            transform: scale(1.1);
            z-index: 60;
        }

        /* 🪐 วงแหวน */
        .orbit-ring {
            position: absolute;
            border-radius: 50%;
            border: 1px dashed rgba(255, 255, 255, 0.08);
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none; 
        }

        .planet-anchor {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            pointer-events: auto;
        }

        /* 🌟 ตัวดาวเพื่อน */
        .planet-card {
            position: absolute;
            top: -26px; 
            left: -26px;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background-color: #e0f2fe; 
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            box-shadow: 
                0 2px 8px rgba(0,0,0,0.3), 
                inset 0 0 0 1px rgba(255,255,255,0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            color: transparent;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 0;
            user-select: none;
            border: 2px solid rgba(255,255,255,0.8);
            touch-action: manipulation;
        }
        
        .planet-card:hover {
            scale: 1.4;
            z-index: 100;
            border-color: #fbbf24;
            box-shadow: 0 0 30px rgba(251, 191, 36, 0.6);
        }

        /* 👑 ดาวครู */
        .planet-card.teacher {
            width: 68px;
            height: 68px;
            top: -34px;
            left: -34px;
            border: 3px solid #fbbf24;
            box-shadow: 0 0 15px rgba(251, 191, 36, 0.4);
            z-index: 20; 
        }

        /* Animations */
        @keyframes sun-pulse {
            0%, 100% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.4); transform: scale(1); }
            50% { box-shadow: 0 0 70px rgba(251, 191, 36, 0.6); transform: scale(1.02); }
        }
        @keyframes orbit-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
        }

        .orbit-ring:hover { animation-play-state: paused !important; }
        .orbit-ring:hover .planet-card { animation-play-state: paused !important; }

        .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            color: #333;
        }
        
        /* =========================================
           🖥️ Desktop Layout (Default)
           Search Bar อยู่ซ้ายมือ ไม่บังวงโคจร
           ========================================= */
        .floating-search {
            position: fixed;
            top: 40px;      /* ห่างจากขอบบน */
            left: 40px;     /* ห่างจากขอบซ้าย */
            z-index: 100;
            width: 320px;   /* ความกว้างคงที่สวยๆ */
        }
        
        #searchInput {
            font-size: 16px; 
            background: rgba(255, 255, 255, 0.15);
        }

        /* =========================================
           📱 & 📟 Tablet/Mobile Layout
           Search Bar ย้ายมาอยู่ข้างล่าง เพื่อให้กดง่าย
           ========================================= */
        @media (max-width: 1024px) {
            .floating-search {
                top: auto;      /* ยกเลิก top */
                left: 50%;      /* กึ่งกลางแนวนอน */
                bottom: 30px;   /* ติดขอบล่าง */
                transform: translateX(-50%);
                width: 85%;
                max-width: 500px;
                padding-bottom: env(safe-area-inset-bottom);
            }

            #galaxy-container {
                padding-bottom: 80px; /* เว้นที่ให้ Search Bar ด้านล่าง */
            }
        }

        /* =========================================
           📱 Mobile Specific Tweaks (< 768px)
           ปรับขนาดดาวให้เล็กลงหน่อย กันเบียด
           ========================================= */
        @media (max-width: 768px) {
            .planet-card { 
                width: 44px; height: 44px; 
                top: -22px; left: -22px; 
            }
            .planet-card.teacher { 
                width: 60px; height: 60px; 
                top: -30px; left: -30px; 
            }
            .sun-center { 
                width: 18vmin; height: 18vmin; 
                max-width: 100px; max-height: 100px; 
                min-width: 70px; min-height: 70px;
            }
        }
    </style>
</head>
<body>

    <div class="space-bg"></div>
    <div class="stars"></div>

    <div id="galaxy-container">
        <!-- Sun -->
        <div class="sun-center" onclick="openCenterModal()">
            <i data-lucide="heart" class="w-6 h-6 md:w-8 md:h-8 text-amber-600 mb-1 fill-current opacity-90"></i>
            <h1 class="text-xs md:text-lg font-bold tracking-tight">ถึงทุกคน</h1>
            <p class="text-[8px] md:text-[10px] text-amber-700/70 uppercase tracking-widest font-semibold">Click Me</p>
        </div>
        <!-- Rings injected here -->
    </div>

    <!-- Search Bar -->
    <div class="floating-search">
        <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i data-lucide="search" class="text-white/60 h-4 w-4"></i>
            </div>
            <input type="text" id="searchInput" 
                class="block w-full pl-9 pr-3 py-3 border-none rounded-full leading-5 text-white placeholder-white/50 focus:outline-none focus:bg-white/25 transition shadow-lg border border-white/10 ring-1 ring-white/5 backdrop-blur-md" 
                placeholder="ค้นหาชื่อเพื่อน...">
        </div>
    </div>

    <!-- Modal -->
    <div id="modalOverlay" class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300">
        <div id="modalContent" class="glass-card w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden transform scale-90 transition-transform duration-300 relative">
            
            <button onclick="closeModal()" class="absolute top-4 right-4 p-2 rounded-full bg-white/50 hover:bg-white transition z-10 text-gray-600">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <div id="modalHeaderBg" class="relative h-28 bg-gradient-to-r from-indigo-500 to-purple-500">
                <!-- Avatar in Modal -->
                <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <div class="w-24 h-24 rounded-full border-4 border-white bg-gray-100 shadow-lg flex items-center justify-center overflow-hidden">
                        <!-- Shows Image if available, else Initials -->
                        <img id="modalImg" src="" class="w-full h-full object-cover hidden">
                        <span id="modalAvatar" class="text-3xl font-bold text-gray-400">?</span>
                    </div>
                </div>
            </div>

            <div class="pt-14 px-6 pb-8 text-center">
                <span id="modalRole" class="hidden"></span>
                <h2 id="modalName" class="text-2xl font-bold text-gray-800 mb-1">Name</h2>
                <p id="modalNick" class="text-sm text-gray-500 mb-6 font-medium">@Nickname</p>

                <div class="bg-indigo-50/80 rounded-xl p-6 mb-6 shadow-sm text-left relative border border-indigo-100">
                    <i data-lucide="quote" class="absolute top-4 left-4 w-5 h-5 text-indigo-200 fill-current"></i>
                    <p id="modalMessage" class="relative z-10 text-gray-700 leading-relaxed whitespace-pre-line text-sm pl-2">...</p>
                </div>

                <div id="spotifyContainer" class="w-full rounded-xl overflow-hidden shadow-lg bg-black ring-1 ring-black/5">
                     <iframe id="spotifyFrame" style="border-radius:12px" src="" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>

    <script>
        const centralMessage = {
            title: "ถึงเพื่อนๆ 6/X และคุณครูที่รัก",
            message: "ขอบคุณสำหรับการเดินทางตลอด 3 ปีที่ผ่านมา\nดีใจมากที่เราได้มาเจอกัน ได้หัวเราะ ได้ร้องไห้ด้วยกัน\nแม้ต้องแยกย้ายกันไปเติบโต แต่ความทรงจำเหล่านี้จะอยู่ตลอดไป\n\nขอให้ทุกคนโชคดีกับเส้นทางของตัวเองนะ\nรักเสมอ.",
            spotifyId: "7elfEdwnTZIPvbLKw54FI8", 
            type: "playlist", 
            imageUrl: "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=500&auto=format&fit=crop&q=60" 
        };

        const memories = [
            // --- คุณครู ---
            { 
                id: 1, 
                name: "ครูสมศรี", 
                nickname: "แม่ศรี", 
                role: "teacher", 
                message: "รักครูครับ...", 
                spotifyId: "37i9dQZF1DXcBWIGoYBM5M",
                type: "playlist", 
                imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop&q=60" 
            },
            { 
                id: 2, 
                name: "ครูวิชัย", 
                nickname: "ครูวิ", 
                role: "teacher", 
                message: "ขอบคุณครับครู...", 
                spotifyId: "37i9dQZF1DX0XUsuxWHRQd",
                type: "playlist",
                imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60" 
            },
            
            // --- เพื่อนๆ ---
            { 
                id: 3, 
                name: "นาย ก.", 
                nickname: "ไอ้แว่น", 
                role: "friend", 
                message: "โชคดีเพื่อน...", 
                spotifyId: "37i9dQZF1DX4WYpdgoIcn6", 
                type: "playlist",
                imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60" 
            },
            { 
                id: 4, 
                name: "นางสาว ข.", 
                nickname: "บี", 
                role: "friend", 
                message: "มีความสุขนะ...", 
                spotifyId: "37i9dQZF1DWUXHPhXW3823", 
                type: "playlist",
                imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60" 
            },
            { 
                id: 5, 
                name: "นาย ค.", 
                nickname: "ต้อม", 
                role: "friend", 
                message: "อย่าลืมกันนะ...", 
                spotifyId: "37i9dQZF1DXcBWIGoYBM5M", 
                type: "playlist",
                imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60" 
            }
        ];

        function generatePlaceholderData() {
            for (let i = memories.length + 1; i <= 42; i++) {
                memories.push({
                    id: i,
                    name: `เพื่อน ${i}`,
                    nickname: `Friend ${i}`,
                    role: "friend",
                    message: "ขอให้โชคดีนะ ไว้เจอกันใหม่...",
                    spotifyId: "7elfEdwnTZIPvbLKw54FI8", 
                    type: "playlist", 
                    imageUrl: `https://picsum.photos/seed/${i}/200`
                });
            }
        }
        generatePlaceholderData();

        const container = document.getElementById('galaxy-container');
        let searchInput, modalOverlay, modalContent;

        document.addEventListener('DOMContentLoaded', () => {
            searchInput = document.getElementById('searchInput');
            modalOverlay = document.getElementById('modalOverlay');
            modalContent = document.getElementById('modalContent');
            
            initGalaxy();
            
            searchInput.addEventListener('input', (e) => {
                const keyword = e.target.value.toLowerCase();
                const planets = document.querySelectorAll('.planet-card');
                
                planets.forEach(planet => {
                    const name = planet.dataset.name.toLowerCase();
                    const nick = planet.dataset.nick.toLowerCase();
                    
                    if(keyword === "") {
                        // Reset Style
                        planet.style.opacity = "";
                        planet.style.scale = "";
                        planet.style.filter = "";
                        planet.style.zIndex = "";
                        if(planet.classList.contains('teacher')) {
                            planet.style.borderColor = "#fbbf24";
                            planet.style.boxShadow = "0 0 15px rgba(251, 191, 36, 0.4)";
                        } else {
                            planet.style.borderColor = "rgba(255,255,255,0.8)";
                            planet.style.boxShadow = "";
                        }
                    } else if (name.includes(keyword) || nick.includes(keyword)) {
                        // Highlight Style
                        planet.style.opacity = "1";
                        planet.style.zIndex = "200";
                        planet.style.scale = "1.5";
                        planet.style.borderColor = "#fbbf24"; 
                        planet.style.boxShadow = "0 0 30px #fbbf24"; 
                    } else {
                        // Dim Style
                        planet.style.opacity = "0.15";
                        planet.style.zIndex = "1";
                        planet.style.scale = "0.8";
                        planet.style.filter = "grayscale(100%)";
                        planet.style.boxShadow = "none";
                        planet.style.borderColor = "rgba(255,255,255,0.3)";
                    }
                });
            });

            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) closeModal();
            });
            
            if (typeof lucide !== 'undefined') lucide.createIcons();
        });

        function initGalaxy() {
            // 📏 Adaptive Ring Sizes
            // ใช้ Logic เช็คขนาดหน้าจอเพื่อปรับขนาดวงโคจร
            const isSmallScreen = window.innerWidth <= 768;
            
            // ถ้าจอมือถือเล็กๆ (SmallScreen) ให้ขยายวงโคจรออกไปอีกนิด (25/38/51) เพื่อความโปร่ง
            // ถ้าจอคอม (Desktop) ใช้ขนาดปกติ (22/34/46)
            
            const r1 = isSmallScreen ? 25 : 22;
            const r2 = isSmallScreen ? 38 : 34;
            const r3 = isSmallScreen ? 51 : 46;

            const ringsConfig = [
                { radius: r1, count: 8, speed: 50, dir: 1 },    
                { radius: r2, count: 14, speed: 70, dir: -1 },  
                { radius: r3, count: 20, speed: 90, dir: 1 }    
            ];

            let personIndex = 0;

            ringsConfig.forEach((config, index) => {
                const ring = document.createElement('div');
                ring.className = 'orbit-ring';
                ring.style.width = `${config.radius * 2}vmin`;
                ring.style.height = `${config.radius * 2}vmin`;
                ring.style.animation = `orbit-rotate ${config.speed}s linear infinite`;
                if(config.dir === -1) ring.style.animationDirection = 'reverse';

                const angleStep = 360 / config.count;
                
                for (let i = 0; i < config.count; i++) {
                    if (personIndex >= memories.length) break;
                    
                    const person = memories[personIndex];
                    const angle = i * angleStep;
                    
                    const anchor = document.createElement('div');
                    anchor.className = 'planet-anchor';
                    anchor.style.transform = `rotate(${angle}deg) translate(${config.radius}vmin) rotate(-${angle}deg)`;

                    const planet = document.createElement('div');
                    planet.className = 'planet-card';
                    planet.dataset.name = person.name;
                    planet.dataset.nick = person.nickname;
                    
                    if (person.imageUrl) {
                        planet.style.backgroundImage = `url('${person.imageUrl}')`;
                    }
                    
                    if (person.role === 'teacher') {
                        planet.classList.add('teacher');
                    }

                    planet.style.animation = `orbit-counter-rotate ${config.speed}s linear infinite`;
                    if(config.dir === -1) planet.style.animationDirection = 'reverse';

                    planet.innerHTML = ``;
                    
                    planet.onclick = (e) => {
                        e.stopPropagation();
                        openModal(person);
                    };

                    anchor.appendChild(planet);
                    ring.appendChild(anchor);
                    personIndex++;
                }
                container.appendChild(ring);
            });
        }

        function openCenterModal() {
            document.getElementById('modalName').textContent = centralMessage.title;
            document.getElementById('modalNick').textContent = "จากใจถึงใจ";
            document.getElementById('modalMessage').textContent = centralMessage.message;
            
            const modalAvatar = document.getElementById('modalAvatar');
            const modalImg = document.getElementById('modalImg');

            if(centralMessage.imageUrl) {
                modalImg.src = centralMessage.imageUrl;
                modalImg.classList.remove('hidden');
                modalAvatar.classList.add('hidden');
            } else {
                modalAvatar.textContent = "❤";
                modalAvatar.classList.remove('hidden');
                modalImg.classList.add('hidden');
            }

            document.getElementById('modalHeaderBg').className = "relative h-28 bg-gradient-to-r from-pink-400 to-rose-500";
            
            // ใช้ค่า Default เป็น playlist หากไม่ระบุ
            const type = centralMessage.type || 'playlist'; 
            const spotifyUrl = `https://open.spotify.com/embed/${type}/${centralMessage.spotifyId}?utm_source=generator&theme=0`;
            document.getElementById('spotifyFrame').src = spotifyUrl;

            showModal();
        }

        function openModal(person) {
            document.getElementById('modalName').textContent = person.name;
            document.getElementById('modalNick').textContent = `(${person.nickname})`;
            document.getElementById('modalMessage').textContent = person.message;
            
            const modalAvatar = document.getElementById('modalAvatar');
            const modalImg = document.getElementById('modalImg');

            if(person.imageUrl) {
                modalImg.src = person.imageUrl;
                modalImg.classList.remove('hidden');
                modalAvatar.classList.add('hidden');
            } else {
                modalAvatar.textContent = person.name.charAt(0);
                modalAvatar.classList.remove('hidden');
                modalImg.classList.add('hidden');
            }
            
            if(person.role === 'teacher') {
                document.getElementById('modalHeaderBg').className = "relative h-28 bg-gradient-to-r from-amber-400 to-yellow-500";
            } else {
                document.getElementById('modalHeaderBg').className = "relative h-28 bg-gradient-to-r from-indigo-500 to-purple-600";
            }

            // ใช้ค่า Default เป็น playlist หากไม่ระบุ
            const type = person.type || 'playlist';
            const spotifyUrl = `https://open.spotify.com/embed/${type}/${person.spotifyId}?utm_source=generator&theme=0`;
            document.getElementById('spotifyFrame').src = spotifyUrl;

            showModal();
        }

        function showModal() {
            modalOverlay.classList.remove('hidden');
            requestAnimationFrame(() => {
                modalOverlay.classList.remove('opacity-0');
                modalContent.classList.remove('scale-90');
            });
        }

        function closeModal() {
            modalOverlay.classList.add('opacity-0');
            modalContent.classList.add('scale-90');
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
                document.getElementById('spotifyFrame').src = '';
            }, 300);
        }
    </script>
</body>
</html>
