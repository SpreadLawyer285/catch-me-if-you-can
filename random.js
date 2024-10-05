const button = document.querySelector('.random-button');

        function moveButton() {
            const screenHeight = window.innerHeight;
            const screenWidth = window.innerWidth;

            // Véletlenszerű pozíció meghatározása
            const newTop = Math.random() * (screenHeight - 100) + 'px';
            const newLeft = Math.random() * (screenWidth - 100) + 'px';

            // Állítsuk a pozíciót abszolútra, hogy bárhova el tudjon menni
            button.style.position = 'absolute';
            
            // Gomb új helyre mozgatása
            button.style.top = newTop;
            button.style.left = newLeft;
        }

        // Ha az egér közel kerül a gombhoz, elmenekül
        button.addEventListener('mouseover', moveButton);

        button.addEventListener('click', () => {
            const part1 = document.getElementById('part1').value;
            const part2 = document.getElementById('part2').value;
            const part3 = document.getElementById('part3').value;
            alert(`You entered: ${part1}-${part2}-${part3}. Is that even a phone number? Who knows!`);
        });