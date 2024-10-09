window.onload = function() {
    const title = document.querySelector('h1');
    const description = document.querySelector('p');
    const image = document.querySelector('img');
    const playButtons = document.querySelectorAll('.play-intro');
    const videoOverlays = document.querySelectorAll('.video-overlay');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Ảnh để lựa chọn
    const images = [
        'https://i.pinimg.com/originals/3d/54/a3/3d54a3afe927891ec41fec08f2c563d8.jpg', //1
        'https://i.pinimg.com/736x/0c/0a/c1/0c0ac16117e125ff4ffddf1bc128be05.jpg', //2
        'https://i.pinimg.com/474x/e4/ab/a3/e4aba321322d069d9303f5cccb6fe3ad.jpg', //3
        'https://i.pinimg.com/474x/aa/50/df/aa50df0bb0dde1020e403f072ad9d0db.jpg', //4
        'https://i.pinimg.com/236x/31/c9/b4/31c9b4dbf40b60eb2af1be9afe694b02.jpg', //5
        'https://i.pinimg.com/474x/1b/62/b3/1b62b34df28663a1f3793a81d6f6f40f.jpg', //6
        'https://i.pinimg.com/474x/93/09/66/9309669cb01328636e837bb65a42911e.jpg', //7
        'https://i.pinimg.com/474x/46/3a/69/463a694efc82bbc113f351f37c2824a3.jpg', //8
        'https://i.pinimg.com/474x/bd/5b/a9/bd5ba926dcb87a3bb59565339a31c7c8.jpg', //9
        'https://i.pinimg.com/736x/68/8b/ee/688bee98801eda8c1d2ac2ef7f1b0da7.jpg', //10
        'https://i.pinimg.com/474x/72/2b/6f/722b6f2d677b4ef40ea4a92943668c5a.jpg', //11
        'https://i.pinimg.com/474x/03/8f/2b/038f2bc90bdc1a3ce47cddf30325f8d3.jpg', //12
        'https://i.pinimg.com/474x/69/b1/cd/69b1cd8a927c24f8a5a0fbc038f6a3f0.jpg', //13
        'https://i.pinimg.com/474x/c9/b0/be/c9b0beeb6ae293d5c3123e600624c89c.jpg', //14
        'https://i.pinimg.com/474x/aa/8c/aa/aa8caaf55fae18b64e91ba36addbd788.jpg', //15
        'https://i.pinimg.com/474x/e1/26/6d/e1266db8106cc4a4b65557766748b8dc.jpg', //16
        'https://i.pinimg.com/474x/25/3d/ea/253dea5dc52d3b0a9945699ac5f5720a.jpg', //17
        'https://i.pinimg.com/236x/4c/54/74/4c5474bd198123e3f9ba8d25d4ce5875.jpg', //18
        'https://i.pinimg.com/474x/4a/07/3b/4a073b22116af7c0598c7cd2a75c09c8.jpg', //19
        'https://i.pinimg.com/736x/60/f3/9e/60f39ec721953f95f3ca391288de38b8.jpg', //20
        'https://i.pinimg.com/736x/67/3e/cf/673ecf948f21dd06ff4df6b7615bf046.jpg', //21
        'https://i.pinimg.com/474x/6e/0a/cb/6e0acb5902d112eef5b60cbb7a7a8ef1.jpg', //22
        'https://i.pinimg.com/474x/14/8e/e5/148ee58f71fffd974901bac998680047.jpg', //23
        'https://i.pinimg.com/474x/fc/9a/ac/fc9aac9e9767243b2255be0159ac08bc.jpg', //24
        'https://i.pinimg.com/474x/8a/50/4b/8a504b774d270f0eef2facad54f61aa1.jpg', //25
        'https://i.pinimg.com/236x/d4/b4/13/d4b413ab89dd47ad58c4e98b9af8a0f7.jpg', //26
        'https://i.pinimg.com/474x/8c/83/c1/8c83c113dd9c8320307c4c51db88d3c1.jpg', //27
        'https://i.pinimg.com/736x/9c/e3/d4/9ce3d49030ca8f7b34c2213e80afab2a.jpg', //28
        'https://i.pinimg.com/474x/2b/fb/0e/2bfb0e5de917c2df76b7065de38e7228.jpg', //29
        'https://i.pinimg.com/474x/47/e4/4a/47e44aaf7c51c25a8d66115452672caa.jpg', //30
        'https://i.pinimg.com/736x/ad/2c/e0/ad2ce08eeb1e69195eacdbfafa283abf.jpg', //31
        'https://i.pinimg.com/474x/24/96/b5/2496b5bfdd21163d7546103212a3c448.jpg', //32
        'https://i.pinimg.com/474x/1e/eb/ad/1eebad489f023b056ca45ae068a7e173.jpg', //33
        'https://i.pinimg.com/736x/e9/6a/22/e96a2246f44985e332ae4ce228ce3dbb.jpg', //34
        'https://i.imgur.com/BYTVq5K.jpeg', //35 last episode
        'https://i.imgur.com/6T4p14g.jpeg', //36 last episode
        'https://i.imgur.com/6T4p14g.jpeg', //37 last episode
        'https://i.pinimg.com/236x/6c/d9/70/6cd97089e0db61a529f9a84584d4d1b5.jpg', //38
        'https://i.pinimg.com/236x/fa/9d/e1/fa9de1dcecccb7d6c86a7e1f2ccf2444.jpg', //39
        'https://i.pinimg.com/474x/3f/cd/86/3fcd866feacca0fa4b813768cbe9e014.jpg', //40
        'https://i.pinimg.com/236x/f0/7b/d1/f07bd1cd1f8caf94e1af723d8f8f0961.jpg', //41
        'https://i.pinimg.com/474x/dd/62/52/dd625219810145c889e0ad4f842494c9.jpg', //42
        'https://i.pinimg.com/736x/d2/e5/bf/d2e5bfa22bc085b14d4696a2a943dabd.jpg', //43
        'https://i.pinimg.com/474x/91/13/c4/9113c4841a8b75f38b4ccfd42b7f394e.jpg', //44
        'https://i.pinimg.com/236x/5b/e4/d1/5be4d144fbe37477a82c3afdc9e4be20.jpg', //45
        'https://i.pinimg.com/236x/e9/dc/fc/e9dcfcc9e5899c9b21c564a58e011d8a.jpg', //46
        'https://i.pinimg.com/474x/78/b0/f2/78b0f2a92d8239af2e19eba38146ba79.jpg', //47 
        'https://i.pinimg.com/236x/54/ea/c3/54eac360e922aa82b9af805a3793a7e2.jpg', //48
        'https://i.pinimg.com/236x/e5/14/f3/e514f34e1218f4ab0133772516b1ad2d.jpg', //49
        'https://i.pinimg.com/236x/89/dd/90/89dd90a9fb364b3cfc4e0adbda6afa9f.jpg', //50
        'https://i.pinimg.com/474x/3b/9e/29/3b9e2997307f03d2aceb17cd69a4b48e.jpg', //51
        // Thêm nhiều ảnh khác nếu cần
        ];

    // Chọn ảnh ngẫu nhiên
    const randomIndex = Math.floor(Math.random() * images.length);
    image.src = images[randomIndex];

    alert('Lưu ý: Hãy out nếu bạn KHÔNG simp Arya, *ảnh sẽ đổi mỗi khi bạn F5 \nHết ss1 rồi, hẹn năm sau!');

    title.style.opacity = 1;
    title.style.transform = 'translateY(0)';
    description.style.opacity = 1;
    description.style.transform = 'translateY(0)';
    image.style.opacity = 1;
    image.style.transform = 'scale(1)';

    playButtons.forEach((button, index) => {
        button.onclick = function() {
            videoOverlays[index].style.display = 'flex';
            };
    });

    closeBtns.forEach((btn, index) => {
        btn.onclick = function() {
            videoOverlays[index].style.display = 'none';
            };
        });
    };
    // Chặn chuột phải
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
        });

        // Chặn F12 và Ctrl+Shift+I
        document.addEventListener('keydown', function(event) {
            // Kiểm tra nếu người dùng nhấn F12
            if (event.key === 'F12') {
                event.preventDefault();
            }

            // Kiểm tra nếu người dùng nhấn Ctrl+Shift+I (Mở Developer Tools)
            if (event.ctrlKey && event.shiftKey && event.key === 'I') {
                event.preventDefault();
            }

            // Kiểm tra nếu người dùng nhấn Ctrl+U (Xem nguồn trang)
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
            }

            // Kiểm tra nếu người dùng nhấn Ctrl+Shift+C (Inspect Element)
            if (event.ctrlKey && event.shiftKey && event.key === 'C') {
                event.preventDefault();
            }

            // Kiểm tra nếu người dùng nhấn Ctrl+Shift+J (Console)
            if (event.ctrlKey && event.shiftKey && event.key === 'J') {
                event.preventDefault();
            }
        });
        ! function(e, t, a) {
            function n() {
                c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r()
            }

            function r() {
                for (var e = 0; e < d.length; e++) d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999");
                requestAnimationFrame(r)
            }

            function o() {
                var t = "function" == typeof e.onclick && e.onclick;
                e.onclick = function(e) {
                    t && t(), i(e)
                }
            }

            function i(e) {
                var a = t.createElement("div");
                a.className = "heart", d.push({
                    el: a,
                    x: e.clientX - 5,
                    y: e.clientY - 5,
                    scale: 1,
                    alpha: 1,
                    color: s()
                }), t.body.appendChild(a)
            }

            function c(e) {
                var a = t.createElement("style");
                a.type = "text/css";
                try {
                    a.appendChild(t.createTextNode(e))
                } catch (t) {
                    a.styleSheet.cssText = e
                }
                t.getElementsByTagName("head")[0].appendChild(a)
            }

            function s() {
                return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
            }
            var d = [];
            e.requestAnimationFrame = function() {
                return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
                    setTimeout(e, 1e3 / 60)
                }
            }(), n()
        }(window, document);
    
