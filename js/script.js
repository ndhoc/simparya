window.onload = function() {
    const title = document.querySelector('h1');
    const description = document.querySelector('p');
    const image = document.querySelector('img');
    const playButtons = document.querySelectorAll('.play-intro');
    const videoOverlays = document.querySelectorAll('.video-overlay');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Ảnh để lựa chọn
    const images = [
        'https://ik.imagekit.io/ndhoc/webp/3d54a3afe927891ec41fec08f2c563d8.webp?updatedAt=1731601322855', //1
        'https://ik.imagekit.io/ndhoc/webp/0c0ac16117e125ff4ffddf1bc128be05.webp?updatedAt=1731601319554', //2
        'https://ik.imagekit.io/ndhoc/webp/e4aba321322d069d9303f5cccb6fe3ad.webp?updatedAt=1731601332954', //3
        'https://ik.imagekit.io/ndhoc/webp/aa50df0bb0dde1020e403f072ad9d0db.webp?updatedAt=1731601329193', //4
        'https://ik.imagekit.io/ndhoc/webp/31c9b4dbf40b60eb2af1be9afe694b02.webp?updatedAt=1731601319442', //5
        'https://ik.imagekit.io/ndhoc/webp/1b62b34df28663a1f3793a81d6f6f40f.webp?updatedAt=1731601319527', //6
        'https://ik.imagekit.io/ndhoc/webp/9309669cb01328636e837bb65a42911e.webp?updatedAt=1731601329454', //7
        'https://ik.imagekit.io/ndhoc/webp/463a694efc82bbc113f351f37c2824a3.webp?updatedAt=1731601322818', //8
        'https://ik.imagekit.io/ndhoc/webp/bd5ba926dcb87a3bb59565339a31c7c8.webp?updatedAt=1731601329577', //9
        'https://ik.imagekit.io/ndhoc/webp/688bee98801eda8c1d2ac2ef7f1b0da7.webp?updatedAt=1731601323062', //10
        'https://ik.imagekit.io/ndhoc/webp/722b6f2d677b4ef40ea4a92943668c5a.webp?updatedAt=1731601326031', //11
        'https://ik.imagekit.io/ndhoc/webp/038f2bc90bdc1a3ce47cddf30325f8d3.webp?updatedAt=1731601319281', //12
        'https://ik.imagekit.io/ndhoc/webp/69b1cd8a927c24f8a5a0fbc038f6a3f0.webp?updatedAt=1731601326130', //13
        'https://ik.imagekit.io/ndhoc/webp/31c9b4dbf40b60eb2af1be9afe694b02.webp?updatedAt=1731601319442', //14
        'https://ik.imagekit.io/ndhoc/webp/aa8caaf55fae18b64e91ba36addbd788.webp?updatedAt=1731601329381', //15
        'https://ik.imagekit.io/ndhoc/webp/e1266db8106cc4a4b65557766748b8dc.webp?updatedAt=1731601332512', //16
        'https://ik.imagekit.io/ndhoc/webp/253dea5dc52d3b0a9945699ac5f5720a.webp?updatedAt=1731601319382', //17
        'https://ik.imagekit.io/ndhoc/webp/4c5474bd198123e3f9ba8d25d4ce5875.webp?updatedAt=1731601323383', //18
        'https://ik.imagekit.io/ndhoc/webp/4a073b22116af7c0598c7cd2a75c09c8.webp?updatedAt=1731601322807', //19
        'https://ik.imagekit.io/ndhoc/webp/60f39ec721953f95f3ca391288de38b8.webp?updatedAt=1731601323400', //20
        'https://ik.imagekit.io/ndhoc/webp/673ecf948f21dd06ff4df6b7615bf046.webp?updatedAt=1731601322994', //21
        'https://ik.imagekit.io/ndhoc/webp/6e0acb5902d112eef5b60cbb7a7a8ef1.webp?updatedAt=1731601326514', //22
        'https://ik.imagekit.io/ndhoc/webp/148ee58f71fffd974901bac998680047.webp?updatedAt=1731601319454', //23
        'https://ik.imagekit.io/ndhoc/webp/fc9aac9e9767243b2255be0159ac08bc.webp?updatedAt=1731601332777', //24
        'https://ik.imagekit.io/ndhoc/webp/8a504b774d270f0eef2facad54f61aa1.webp?updatedAt=1731601326199', //25
        'https://ik.imagekit.io/ndhoc/webp/d4b413ab89dd47ad58c4e98b9af8a0f7.webp?updatedAt=1731601329969', //26
        'https://ik.imagekit.io/ndhoc/webp/8c83c113dd9c8320307c4c51db88d3c1.webp?updatedAt=1731601326500', //27
        'https://ik.imagekit.io/ndhoc/webp/9ce3d49030ca8f7b34c2213e80afab2a.webp?updatedAt=1731601329116', //28
        'https://ik.imagekit.io/ndhoc/webp/2bfb0e5de917c2df76b7065de38e7228.webp?updatedAt=1731601319366', //29
        'https://ik.imagekit.io/ndhoc/webp/47e44aaf7c51c25a8d66115452672caa.webp?updatedAt=1731601322965', //30
        'https://ik.imagekit.io/ndhoc/webp/ad2ce08eeb1e69195eacdbfafa283abf.webp?updatedAt=1731601329350', //31
        'https://ik.imagekit.io/ndhoc/webp/2496b5bfdd21163d7546103212a3c448.webp?updatedAt=1731601319468', //32
        'https://simparya.com/images/1eebad489f023b056ca45ae068a7e173.webp', //33
        'https://ik.imagekit.io/ndhoc/webp/e96a2246f44985e332ae4ce228ce3dbb.webp?updatedAt=1731601332451', //34
        'https://ik.imagekit.io/ndhoc/webp/BYTVq5K.webp?updatedAt=1731601329483', //35 last episode
        'https://ik.imagekit.io/ndhoc/webp/6T4p14g.webp?updatedAt=1731601325925', //36 last episode
        'https://ik.imagekit.io/ndhoc/webp/6cd97089e0db61a529f9a84584d4d1b5.webp?updatedAt=1731601325985', //38
        'https://ik.imagekit.io/ndhoc/webp/fa9de1dcecccb7d6c86a7e1f2ccf2444.webp?updatedAt=1731601333705', //39
        'https://ik.imagekit.io/ndhoc/webp/3fcd866feacca0fa4b813768cbe9e014.webp?updatedAt=1731601322754', //40
        'https://ik.imagekit.io/ndhoc/webp/f07bd1cd1f8caf94e1af723d8f8f0961.webp?updatedAt=1731601333366', //41
        'https://ik.imagekit.io/ndhoc/webp/dd625219810145c889e0ad4f842494c9.webp?updatedAt=1731601332497', //42
        'https://ik.imagekit.io/ndhoc/webp/d2e5bfa22bc085b14d4696a2a943dabd.webp?updatedAt=1731601329708', //43
        'https://ik.imagekit.io/ndhoc/webp/9113c4841a8b75f38b4ccfd42b7f394e.webp?updatedAt=1731601326510', //44
        'https://ik.imagekit.io/ndhoc/webp/e9dcfcc9e5899c9b21c564a58e011d8a.webp?updatedAt=1731601332765', //46
        'https://ik.imagekit.io/ndhoc/webp/78b0f2a92d8239af2e19eba38146ba79.webp?updatedAt=1731601326146', //47 
        'https://ik.imagekit.io/ndhoc/webp/54eac360e922aa82b9af805a3793a7e2.webp?updatedAt=1731601322852', //48
        'https://ik.imagekit.io/ndhoc/webp/e514f34e1218f4ab0133772516b1ad2d.webp?updatedAt=1731601333032', //49
        'https://ik.imagekit.io/ndhoc/webp/89dd90a9fb364b3cfc4e0adbda6afa9f.webp?updatedAt=1731601326645', //50
        'https://ik.imagekit.io/ndhoc/webp/3b9e2997307f03d2aceb17cd69a4b48e.webp?updatedAt=1731601319513', //51
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
    
