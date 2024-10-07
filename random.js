const button = document.querySelector('.random-button');

        function moveButton() {
            setTimeout(()=>{
                const screenHeight = window.innerHeight;
                const screenWidth = window.innerWidth;
    
            
                const newTop = Math.random() * (screenHeight - 100) + 'px';
                const newLeft = Math.random() * (screenWidth - 100) + 'px';
    
                
                button.style.position = 'absolute';
                
                
                button.style.top = newTop;
                button.style.left = newLeft;
            },5)
        }

        
        button.addEventListener('mouseover', moveButton);

        button.addEventListener('click', () => {
            const part1 = document.getElementById('part1').value;
            const part2 = document.getElementById('part2').value;
            const part3 = document.getElementById('part3').value;
            alert(`You entered: ${part1}-${part2}-${part3}. Is that even a phone number? Who knows!`);
        });

        document.getElementById('generateButton').addEventListener('click', function() {
            
            const randomPhoneNumber = generateRandomPhoneNumber();
            
            
            document.getElementById('randomPhoneNumber').textContent = randomPhoneNumber;
        });
        
        
        function generateRandomPhoneNumber() {
            const prefix = '+36';
            const areaCode = Math.floor(Math.random() * 900) + 100;  
            const firstPart = Math.floor(Math.random() * 900) + 100;
            const secondPart = Math.floor(Math.random() * 9000) + 1000;
            
            return `${prefix} (${areaCode}) ${firstPart}-${secondPart}`;
        }
        