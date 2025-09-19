class Cardsnap {
    constructor() {
        this.players = [];
        this.totalCards = 87;
        this.cardsLeft = this.totalCards;
        this.currentRound = 1;
        this.gameEnded = false;
        this.currentGuesses = [];
        this.gameStarted = false;
        this.currentAnswer = '';
        this.roundAnswered = false;
        
        // Image database based on actual files in the "kort" folder
        this.imageDatabase = [
            { filename: 'Alpaca.jpg', answer: 'alpaca' },
            { filename: 'Bee.jpg', answer: 'bee' },
            { filename: 'Blue Whale.jpg', answer: 'blue whale' },
            { filename: 'Beaver.jpg', answer: 'beaver' },
            { filename: 'Elephant.jpg', answer: 'elephant' },
            { filename: 'Butterfly.jpg', answer: 'butterfly' },
            { filename: 'Bat.jpg', answer: 'bat' },
            { filename: 'Hippopotamus.jpg', answer: 'hippopotamus' },
            { filename: 'Flying_fish.jpg', answer: 'flying fish' },
            { filename: 'Giraffe.jpg', answer: 'giraffe' },
            { filename: 'Gorilla.jpg', answer: 'gorilla' },
            { filename: 'Badger.jpg', answer: 'badger' },
            { filename: 'Pike.jpg', answer: 'pike' },
            { filename: 'Wasp.jpg', answer: 'wasp' },
            { filename: 'Dog.jpg', answer: 'dog' },
            { filename: 'Hyena.jpg', answer: 'hyena' },
            { filename: 'Horse.jpg', answer: 'horse' },
            { filename: 'Hedgehog.jpg', answer: 'hedgehog' },
            { filename: 'Polar_bear.jpg', answer: 'polar bear' },
            { filename: 'Jaguar.jpg', answer: 'jaguar' },
            { filename: 'Camel.jpg', answer: 'camel' },
            { filename: 'Chameleon.jpg', answer: 'chameleon' },
            { filename: 'Cat.jpg', answer: 'cat' },
            { filename: 'Kiwi.jpg', answer: 'kiwi' },
            { filename: 'Koala.jpg', answer: 'koala' },
            { filename: 'Hummingbird.jpg', answer: 'hummingbird' },
            { filename: 'Raven.jpg', answer: 'raven' },
            { filename: 'Crab.jpg', answer: 'crab' },
            { filename: 'Crocodile.jpg', answer: 'crocodile' },
            { filename: 'Crow.jpg', answer: 'crow' },
            { filename: 'Kangaroo.jpg', answer: 'kangaroo' },
            { filename: 'Lion.jpg', answer: 'lion' },
            { filename: 'Leopard.jpg', answer: 'leopard' },
            { filename: 'Lynx.jpg', answer: 'lynx' },
            { filename: 'Moth.jpg', answer: 'moth' },
            { filename: 'Groundhog.jpg', answer: 'groundhog' },
            { filename: 'Human.jpg', answer: 'human' },
            { filename: 'Seagull.jpg', answer: 'seagull' },
            { filename: 'Rhinoceros.jpg', answer: 'rhinoceros' },
            { filename: 'Ladybug.jpg', answer: 'ladybug' },
            { filename: 'Snake.jpg', answer: 'snake' },
            { filename: 'Oyster.jpg', answer: 'oyster' },
            { filename: 'Peacock.jpg', answer: 'peacock' },
            { filename: 'Reindeer.jpg', answer: 'reindeer' },
            { filename: 'Chimpanzee.jpg', answer: 'chimpanzee' },
            { filename: 'Sloth.jpg', answer: 'sloth' },
            { filename: 'Beetle.jpg', answer: 'beetle' },
            { filename: 'Magpie.jpg', answer: 'magpie' },
            { filename: 'Scorpion.jpg', answer: 'scorpion' },
            { filename: 'Skunk.jpg', answer: 'skunk' },
            { filename: 'Turtle.jpg', answer: 'turtle' },
            { filename: 'Spider.jpg', answer: 'spider' },
            { filename: 'Stork.jpg', answer: 'stork' },
            { filename: 'Ostrich.jpg', answer: 'ostrich' },
            { filename: 'Meerkat.jpg', answer: 'meerkat' },
            { filename: 'Swan.jpg', answer: 'swan' },
            { filename: 'Seal.jpg', answer: 'seal' },
            { filename: 'Tapir.jpg', answer: 'tapir' },
            { filename: 'Dragonfly.jpg', answer: 'dragonfly' },
            { filename: 'Toucan.jpg', answer: 'toucan' },
            { filename: 'Raccoon.jpg', answer: 'raccoon' },
            { filename: 'Owl.jpg', answer: 'owl' },
            { filename: 'Walrus.jpg', answer: 'walrus' },
            { filename: 'Walking_stick.jpg', answer: 'walking stick' },
            { filename: 'Wolf.jpg', answer: 'wolf' },
            { filename: 'Donkey.jpg', answer: 'donkey' },
            { filename: 'Moose.jpg', answer: 'moose' },
            { filename: 'Wild_boar.jpg', answer: 'wild boar' },
            { filename: 'Roe deer.jpg', answer: 'roe deer' },
            { filename: 'Fox.jpg', answer: 'fox' },
            { filename: 'Wolverine.jpg', answer: 'wolverine' },
            { filename: 'Arctic_fox.jpg', answer: 'arctic fox' },
            { filename: 'Ermine.jpg', answer: 'ermine' },
            { filename: 'Mink.jpg', answer: 'mink' },
            { filename: 'Toad.jpg', answer: 'toad' },
            { filename: 'Frog.jpg', answer: 'frog' },
            { filename: 'Salmon.jpg', answer: 'salmon' },
            { filename: 'Perch.jpg', answer: 'perch' },
            { filename: 'Puffin.jpg', answer: 'puffin' },
            { filename: 'Dolphin.jpg', answer: 'dolphin' },
            { filename: 'Shark.jpg', answer: 'shark' },
            { filename: 'Starfish.jpg', answer: 'starfish' },
            { filename: 'Jellyfish.jpg', answer: 'jellyfish' },
            { filename: 'Octopus.jpg', answer: 'octopus' },
            { filename: 'Squid.jpg', answer: 'squid' },
            { filename: 'Clownfish.jpg', answer: 'clownfish' },
            { filename: 'Angelfish.jpg', answer: 'angelfish' },
            { filename: 'Polar bear.jpg', answer: 'polar bear' },
            { filename: 'Penguin.jpg', answer: 'penguin' },
            { filename: 'Killer whale.jpg', answer: 'killer whale' },
            { filename: 'Mammoth.jpg', answer: 'mammoth' },
            { filename: 'Tyrannosaurus_rex.jpg', answer: 'tyrannosaurus rex' },
            { filename: 'Centaur.jpg', answer: 'centaur' },
            { filename: 'Phoenix.jpg', answer: 'phoenix' },
            { filename: 'Mermaid.jpg', answer: 'mermaid' },
            { filename: 'Unicorn.jpg', answer: 'unicorn' },
            { filename: 'Sphinx.jpg', answer: 'sphinx' },
            { filename: 'Griffin.jpg', answer: 'griffin' },
            { filename: 'Dragon.jpg', answer: 'dragon' }
        ];
        
        this.shuffledImages = this.shuffleArray([...this.imageDatabase]);
        this.currentImageIndex = 0;
        
        this.initializeGame();
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    initializeGame() {
        // Setup elements
        this.playerNameInput = document.getElementById('player-name-input');
        this.addPlayerBtn = document.getElementById('add-player');
        this.playersListDiv = document.getElementById('players-list');
        this.startGameBtn = document.getElementById('start-game');
        this.setupPhase = document.getElementById('setup-phase');
        this.gameArea = document.getElementById('game-area');
        
        // Game elements
        this.drawCardBtn = document.getElementById('draw-card');
        this.revealAnswerBtn = document.getElementById('reveal-answer');
        this.nextRoundBtn = document.getElementById('next-round');
        this.newGameBtn = document.getElementById('new-game');
        this.backToSetupBtn = document.getElementById('back-to-setup');
        this.currentCard = document.getElementById('current-card');
        this.cardsLeftSpan = document.getElementById('cards-left');
        this.currentRoundSpan = document.getElementById('current-round');
        this.correctAnswerDiv = document.getElementById('correct-answer');
        
        // Guess elements
        this.playerSelect = document.getElementById('player-select');
        this.guessInput = document.getElementById('guess-input');
        this.submitGuessBtn = document.getElementById('submit-guess');
        this.currentGuessesDiv = document.getElementById('current-guesses');
        this.scoreListDiv = document.getElementById('score-list');
        
        this.bindEvents();
    }
    
    bindEvents() {
        this.addPlayerBtn.addEventListener('click', () => this.addPlayer());
        this.playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addPlayer();
        });
        this.startGameBtn.addEventListener('click', () => this.startGame());
        
        this.drawCardBtn.addEventListener('click', () => this.drawCard());
        this.revealAnswerBtn.addEventListener('click', () => this.revealAnswer());
        this.nextRoundBtn.addEventListener('click', () => this.nextRound());
        this.newGameBtn.addEventListener('click', () => this.newGame());
        this.backToSetupBtn.addEventListener('click', () => this.backToSetup());
        
        this.submitGuessBtn.addEventListener('click', () => this.submitGuess());
        this.guessInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.submitGuess();
        });
    }
    
    addPlayer() {
        const name = this.playerNameInput.value.trim();
        if (!name) return;
        
        if (this.players.length >= 10) {
            alert('Maximum 10 players allowed!');
            return;
        }
        
        if (this.players.some(player => player.name === name)) {
            alert('Player already exists!');
            return;
        }
        
        this.players.push({ name: name, score: 0 });
        this.playerNameInput.value = '';
        this.updatePlayersList();
        this.updateStartGameButton();
    }
    
    removePlayer(index) {
        this.players.splice(index, 1);
        this.updatePlayersList();
        this.updateStartGameButton();
    }
    
    updatePlayersList() {
        this.playersListDiv.innerHTML = '';
        this.players.forEach((player, index) => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.innerHTML = `
                <span class="player-name">${player.name}</span>
                <span class="player-score">${player.score} points</span>
                <button class="remove-player" onclick="game.removePlayer(${index})">×</button>
            `;
            this.playersListDiv.appendChild(playerCard);
        });
    }
    
    updateStartGameButton() {
        this.startGameBtn.disabled = this.players.length < 2;
        this.startGameBtn.textContent = this.players.length < 2 
            ? 'Start Game (need at least 2 players)' 
            : `Start Game (${this.players.length} players)`;
    }
    
    startGame() {
        this.setupPhase.style.display = 'none';
        this.gameArea.style.display = 'block';
        this.gameStarted = true;
        this.updatePlayerSelect();
        this.updateScoreboard();
    }
    
    updatePlayerSelect() {
        this.playerSelect.innerHTML = '<option value="">Select player</option>';
        this.players.forEach((player, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = player.name;
            this.playerSelect.appendChild(option);
        });
    }
    
    drawCard() {
        if (this.gameEnded || this.cardsLeft <= 0) return;
        
        const currentImage = this.shuffledImages[this.currentImageIndex];
        this.currentAnswer = currentImage.answer;
        this.roundAnswered = false;
        
        // Clear previous guesses
        this.currentGuesses = [];
        this.updateGuessesDisplay();
        
        // Animate card flip
        this.currentCard.classList.add('card-flip');
        
        setTimeout(() => {
            // Show the image
            this.currentCard.className = 'card card-front';
            
            // Create image path from kort folder
            const imagePath = `kort/${currentImage.filename}`;
            
            this.currentCard.innerHTML = `
                <div class="card-image" style="background-image: url('${imagePath}')"></div>
            `;
            
            // Handle image load error
            const imageDiv = this.currentCard.querySelector('.card-image');
            const tempImg = new Image();
            tempImg.onload = () => {
                // Image loaded successfully
            };
            tempImg.onerror = () => {
                // Image failed to load, show error message
                this.currentCard.innerHTML = `
                    <div class="error-message">
                        <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">📁</div>
                        <div>Image not found:</div>
                        <div style="font-size: 0.9rem; margin-top: 0.5rem;">${imagePath}</div>
                    </div>
                `;
            };
            tempImg.src = imagePath;
            
            this.cardsLeft--;
            this.currentImageIndex++;
            this.updateDisplay();
            
            // Update buttons
            this.drawCardBtn.classList.add('hidden');
            this.revealAnswerBtn.classList.remove('hidden');
            
        }, 300);
    }
    
    submitGuess() {
        const playerIndex = parseInt(this.playerSelect.value);
        const guess = this.guessInput.value.trim().toLowerCase();
        
        if (playerIndex === '' || isNaN(playerIndex) || !guess) {
            alert('Select a player and write a guess!');
            return;
        }
        
        if (this.roundAnswered) {
            alert('This round is already finished!');
            return;
        }
        
        const player = this.players[playerIndex];
        const isCorrect = guess === this.currentAnswer.toLowerCase();
        
        // Add guess
        this.currentGuesses.push({
            playerName: player.name,
            guess: guess,
            correct: isCorrect
        });
        
        // If guess is correct, give points and end round
        if (isCorrect) {
            player.score++;
            this.roundAnswered = true;
            this.nextRoundBtn.classList.remove('hidden');
            this.updateScoreboard();
        }
        
        this.updateGuessesDisplay();
        this.guessInput.value = '';
        this.playerSelect.value = '';
    }
    
    updateGuessesDisplay() {
        this.currentGuessesDiv.innerHTML = '';
        this.currentGuesses.forEach(guess => {
            const guessElement = document.createElement('div');
            guessElement.className = `guess-item ${guess.correct ? 'guess-correct' : 'guess-incorrect'}`;
            guessElement.innerHTML = `
                <span><strong>${guess.playerName}:</strong> ${guess.guess}</span>
                <span>${guess.correct ? '✅' :