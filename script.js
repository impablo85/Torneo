// Base de datos de canciones
const songsData = [
    "Michael Jackson – Billie Jean", "Michael Jackson – Beat It", "Michael Jackson – Thriller",
    "Michael Jackson – Bad", "Michael Jackson – Smooth Criminal", "Michael Jackson – The Way You Make Me Feel",
    "Madonna – Like a Virgin", "Madonna – Material Girl", "Madonna – Papa Don't Preach",
    "Madonna – Like a Prayer", "Madonna – Express Yourself", "Madonna – Vogue",
    "Madonna – Into the Groove", "Madonna – La Isla Bonita", "Prince – When Doves Cry",
    "Prince – Purple Rain", "Prince – Kiss", "Prince – 1999",
    "George Michael – Faith", "George Michael – Careless Whisper", "George Michael – Freedom! '90",
    "George Michael – Father Figure", "Cyndi Lauper – Girls Just Want to Have Fun", "Cyndi Lauper – Time After Time",
    "Cyndi Lauper – True Colors", "Cyndi Lauper – She Bop", "a-ha – Take On Me",
    "a-ha – The Sun Always Shines on T.V.", "a-ha – Cry Wolf", "Duran Duran – Hungry Like the Wolf",
    "Duran Duran – Rio", "Duran Duran – The Reflex", "Duran Duran – Save a Prayer",
    "Bon Jovi – Livin' on a Prayer", "Bon Jovi – You Give Love a Bad Name", "Bon Jovi – Wanted Dead or Alive",
    "Bon Jovi – Bad Medicine", "Whitney Houston – I Wanna Dance with Somebody", "Whitney Houston – How Will I Know",
    "Whitney Houston – Greatest Love of All", "Whitney Houston – I Will Always Love You", "Queen – Radio Ga Ga",
    "Queen – I Want to Break Free", "Queen – A Kind of Magic", "Queen – The Show Must Go On",
    "U2 – With or Without You", "U2 – Where the Streets Have No Name", "U2 – I Still Haven't Found What I'm Looking For",
    "U2 – Pride (In the Name of Love)", "Britney Spears – …Baby One More Time", "Britney Spears – Sometimes",
    "Britney Spears – (You Drive Me) Crazy", "Britney Spears – Oops!... I Did It Again", "Britney Spears – Stronger",
    "Britney Spears – Overprotected", "Britney Spears – I'm a Slave 4 U", "Britney Spears – Toxic",
    "Britney Spears – Everytime", "Britney Spears – Gimme More", "Britney Spears – Piece of Me",
    "Britney Spears – Womanizer", "Britney Spears – Circus", "Britney Spears – If U Seek Amy",
    "Britney Spears – Hold It Against Me", "Christina Aguilera – Genie in a Bottle", "Christina Aguilera – What a Girl Wants",
    "Christina Aguilera – Come On Over Baby (All I Want Is You)", "Christina Aguilera – Beautiful", "Christina Aguilera – Dirrty",
    "Christina Aguilera – Fighter", "Christina Aguilera – Ain't No Other Man", "Christina Aguilera – Hurt",
    "Christina Aguilera – Candyman", "Backstreet Boys – Everybody (Backstreet's Back)", "Backstreet Boys – I Want It That Way",
    "Backstreet Boys – As Long As You Love Me", "Backstreet Boys – Quit Playing Games (With My Heart)", "Backstreet Boys – Larger Than Life",
    "Spice Girls – Wannabe", "Spice Girls – Say You'll Be There", "Spice Girls – 2 Become 1",
    "Spice Girls – Spice Up Your Life", "Spice Girls – Stop", "Spice Girls – Viva Forever",
    "No Doubt – Don't Speak", "No Doubt – Just a Girl", "No Doubt – Sunday Morning",
    "No Doubt – It's My Life", "Alanis Morissette – You Oughta Know", "Alanis Morissette – Ironic",
    "Alanis Morissette – Hand in My Pocket", "Alanis Morissette – Thank U", "Alanis Morissette – Head Over Feet",
    "Oasis – Wonderwall", "Oasis – Don't Look Back in Anger", "Oasis – Champagne Supernova",
    "Oasis – Stop Crying Your Heart Out", "Radiohead – Creep", "Radiohead – Karma Police",
    "Radiohead – No Surprises", "Radiohead – Paranoid Android", "Aerosmith – Crazy",
    "Aerosmith – Cryin'", "Aerosmith – Amazing", "Aerosmith – I Don't Want to Miss a Thing",
    "Red Hot Chili Peppers – Under the Bridge", "Red Hot Chili Peppers – Californication", "Red Hot Chili Peppers – Scar Tissue",
    "Red Hot Chili Peppers – Otherside", "Red Hot Chili Peppers – By the Way", "Robbie Williams – Angels",
    "Robbie Williams – Rock DJ", "Robbie Williams – Feel", "Robbie Williams – Let Me Entertain You",
    "Garbage – Stupid Girl", "Garbage – Only Happy When It Rains", "Garbage – Push It",
    "Garbage – I Think I'm Paranoid", "Justin Timberlake – Like I Love You", "Justin Timberlake – Cry Me a River",
    "Justin Timberlake – Rock Your Body", "Justin Timberlake – SexyBack", "Justin Timberlake – My Love",
    "Justin Timberlake – What Goes Around... Comes Around", "Avril Lavigne – Complicated", "Avril Lavigne – Sk8er Boi",
    "Avril Lavigne – I'm with You", "Avril Lavigne – My Happy Ending", "Avril Lavigne – Don't Tell Me",
    "Avril Lavigne – Girlfriend", "Avril Lavigne – When You're Gone", "Pink – Don't Let Me Get Me",
    "Pink – Just Like a Pill", "Pink – Trouble", "Pink – Stupid Girls",
    "Pink – Who Knew", "Pink – U + Ur Hand", "Pink – So What",
    "Pink – Raise Your Glass", "Kelly Clarkson – Since U Been Gone", "Kelly Clarkson – Behind These Hazel Eyes",
    "Kelly Clarkson – Because of You", "Kelly Clarkson – Breakaway", "Kelly Clarkson – Walk Away",
    "Beyoncé – Crazy in Love", "Beyoncé – Baby Boy", "Beyoncé – Naughty Girl",
    "Beyoncé – Check On It", "Beyoncé – Irreplaceable", "Beyoncé – Single Ladies (Put a Ring on It)",
    "Beyoncé – Halo", "Gwen Stefani – What You Waiting For?", "Gwen Stefani – Rich Girl",
    "Gwen Stefani – Hollaback Girl", "Gwen Stefani – Cool", "Gwen Stefani – Wind It Up",
    "Coldplay – The Scientist", "Coldplay – Clocks", "Coldplay – Fix You",
    "Coldplay – Speed of Sound", "Coldplay – Viva la Vida", "Coldplay – Talk",
    "Maroon 5 – This Love", "Maroon 5 – She Will Be Loved", "Maroon 5 – Sunday Morning",
    "Maroon 5 – Makes Me Wonder", "Maroon 5 – If I Never See Your Face Again", "Rihanna – Pon de Replay",
    "Rihanna – SOS", "Rihanna – Umbrella", "Rihanna – Don't Stop the Music",
    "Rihanna – Disturbia", "Rihanna – Rehab", "Rihanna – Russian Roulette",
    "Rihanna – Rude Boy", "Katy Perry – I Kissed a Girl", "Katy Perry – Hot N Cold",
    "Katy Perry – Thinking of You", "Katy Perry – California Gurls", "Katy Perry – Teenage Dream",
    "Katy Perry – Firework", "Lady Gaga – Just Dance", "Lady Gaga – Poker Face",
    "Lady Gaga – LoveGame", "Lady Gaga – Paparazzi", "Lady Gaga – Bad Romance",
    "Lady Gaga – Telephone", "Lady Gaga – Alejandro", "The Killers – Mr. Brightside",
    "The Killers – Somebody Told Me", "The Killers – All These Things That I've Done", "The Killers – When You Were Young",
    "The Killers – Human", "Green Day – American Idiot", "Green Day – Boulevard of Broken Dreams",
    "Green Day – Wake Me Up When September Ends", "Green Day – Holiday", "Green Day – 21 Guns",
    "Muse – Time Is Running Out", "Muse – Hysteria", "Muse – Starlight",
    "Muse – Supermassive Black Hole", "Muse – Knights of Cydonia", "Muse – Uprising",
    "Paramore – Misery Business", "Paramore – That's What You Get", "Paramore – Decode",
    "Paramore – Ignorance", "Paramore – Brick by Boring Brick", "Amy Winehouse – Rehab",
    "Amy Winehouse – Back to Black", "Amy Winehouse – You Know I'm No Good", "Amy Winehouse – Tears Dry on Their Own",
    "Linkin Park – In the End", "Linkin Park – Crawling", "Linkin Park – Numb",
    "Linkin Park – Breaking the Habit", "Linkin Park – What I've Done", "Linkin Park – New Divide"
];

// Organizar canciones por artista
const artistsData = {};
songsData.forEach(song => {
    const parts = song.split(' – ');
    const artist = parts[0];
    const title = parts[1];
    if (!artistsData[artist]) {
        artistsData[artist] = [];
    }
    artistsData[artist].push(title);
});

// Variables globales
let currentMode = 'songs';
let selectedItems = [];
let selectedArtists = {};
let allRounds = [];
let currentRoundIndex = 0;
let currentLayout = 'horizontal';
let tempArtistSelection = null;

// Elementos del DOM
const searchBox = document.getElementById('searchBox');
const searchResults = document.getElementById('searchResults');
const selectedList = document.getElementById('selectedList');
const itemCount = document.getElementById('itemCount');
const selectionTitle = document.getElementById('selectionTitle');
const startBtn = document.getElementById('startBtn');
const setupScreen = document.getElementById('setupScreen');
const tournamentScreen = document.getElementById('tournamentScreen');
const bracketContainer = document.getElementById('bracketContainer');
const bracketWrapper = document.getElementById('bracketWrapper');
const phaseIndicator = document.getElementById('phaseIndicator');
const winnersSection = document.getElementById('winnersSection');

// Event Listeners

// Mode selector
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentMode = this.getAttribute('data-mode');
        selectedItems = [];
        selectedArtists = {};
        updateSelectedList();
        searchBox.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
        
        if (currentMode === 'songs') {
            searchBox.placeholder = 'Busca canciones...';
            selectionTitle.textContent = 'Canciones Seleccionadas';
        } else {
            searchBox.placeholder = 'Busca artistas...';
            selectionTitle.textContent = 'Artistas Seleccionados';
        }
    });
});

// Layout toggle
document.querySelectorAll('.layout-toggle button').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.layout-toggle button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentLayout = this.getAttribute('data-layout');
        
        bracketWrapper.className = 'bracket-wrapper ' + currentLayout;
        bracketContainer.className = 'bracket-container ' + currentLayout;
    });
});

// Search box
searchBox.addEventListener('input', function() {
    const query = this.value.trim();
    if (query.length < 2) {
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
        return;
    }

    if (currentMode === 'songs') {
        searchSongs(query);
    } else {
        searchArtists(query);
    }
});

// Start button
startBtn.addEventListener('click', function() {
    generateAllRounds();
    setupScreen.classList.remove('active');
    tournamentScreen.classList.add('active');
    displayAllBrackets();
});

// Funciones

function searchSongs(query) {
    const filtered = songsData.filter(song => 
        song.toLowerCase().includes(query.toLowerCase()) && !selectedItems.includes(song)
    );

    let resultsHTML = '';

    if (filtered.length > 0) {
        resultsHTML = filtered.slice(0, 10).map(song => {
            return '<div class="search-item" onclick="addSong(\'' + song.replace(/'/g, "\\'") + '\')">' +
                '<span>' + song + '</span>' +
                '<button class="add-btn">+ Agregar</button>' +
                '</div>';
        }).join('');
    }

    // Opción para agregar personalizada
    resultsHTML += '<div class="search-item custom" onclick="addCustomSong(\'' + query.replace(/'/g, "\\'") + '\')">' +
        '<span>✨ Agregar: "' + query + '"</span>' +
        '<button class="add-btn">+ Agregar</button>' +
        '</div>';

    searchResults.innerHTML = resultsHTML;
    searchResults.classList.add('active');
}

function searchArtists(query) {
    const filtered = Object.keys(artistsData).filter(artist => 
        artist.toLowerCase().includes(query.toLowerCase()) && !selectedArtists[artist]
    );

    let resultsHTML = '';

    if (filtered.length > 0) {
        resultsHTML = filtered.slice(0, 10).map(artist => {
            return '<div class="search-item" onclick="selectArtistForSongs(\'' + artist.replace(/'/g, "\\'") + '\')">' +
                '<span>' + artist + ' (' + artistsData[artist].length + ' canciones)</span>' +
                '<button class="add-btn">Seleccionar</button>' +
                '</div>';
        }).join('');
    }

    resultsHTML += '<div class="search-item custom" onclick="addCustomArtist(\'' + query.replace(/'/g, "\\'") + '\')">' +
        '<span>✨ Agregar artista: "' + query + '"</span>' +
        '<button class="add-btn">+ Agregar</button>' +
        '</div>';

    searchResults.innerHTML = resultsHTML;
    searchResults.classList.add('active');
}

function addSong(song) {
    if (!selectedItems.includes(song)) {
        selectedItems.push(song);
        updateSelectedList();
        searchBox.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
    }
}

function addCustomSong(query) {
    let formattedSong;
    if (query.includes('–')) {
        formattedSong = query;
    } else if (query.includes('-')) {
        formattedSong = query.replace(/-/g, '–');
    } else {
        formattedSong = 'Artista Desconocido – ' + query;
    }
    
    if (!selectedItems.includes(formattedSong)) {
        selectedItems.push(formattedSong);
        updateSelectedList();
        searchBox.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
    }
}

function selectArtistForSongs(artist) {
    tempArtistSelection = artist;
    const songs = artistsData[artist] || [];
    
    let html = '<div style="padding: 15px; background: #fff; color: #333; border-radius: 10px;">';
    html += '<h4 style="margin-bottom: 10px;">Selecciona 3 canciones de ' + artist + ':</h4>';
    
    if (!selectedArtists[artist]) {
        selectedArtists[artist] = {
            name: artist,
            songs: []
        };
    }
    
    songs.forEach(song => {
        const isSelected = selectedArtists[artist].songs.includes(song);
        html += '<div class="song-selection-item' + (isSelected ? ' selected' : '') + '" ' +
            'onclick="toggleSongSelection(\'' + artist.replace(/'/g, "\\'") + '\', \'' + song.replace(/'/g, "\\'") + '\')">' +
            song +
            '</div>';
    });
    
    html += '<button class="add-btn" style="width: 100%; margin-top: 10px; padding: 12px;" ' +
        'onclick="confirmArtistSelection(\'' + artist.replace(/'/g, "\\'") + '\')">Confirmar Selección</button>';
    html += '</div>';
    
    searchResults.innerHTML = html;
    searchResults.classList.add('active');
}

function toggleSongSelection(artist, song) {
    if (!selectedArtists[artist]) {
        selectedArtists[artist] = { name: artist, songs: [] };
    }
    
    const songs = selectedArtists[artist].songs;
    const index = songs.indexOf(song);
    
    if (index > -1) {
        songs.splice(index, 1);
    } else {
        if (songs.length < 3) {
            songs.push(song);
        } else {
            alert('Solo puedes seleccionar 3 canciones por artista');
            return;
        }
    }
    
    // Re-render la selección
    selectArtistForSongs(artist);
}

function confirmArtistSelection(artist) {
    if (!selectedArtists[artist] || selectedArtists[artist].songs.length !== 3) {
        alert('Debes seleccionar exactamente 3 canciones');
        return;
    }
    
    updateSelectedList();
    searchBox.value = '';
    searchResults.innerHTML = '';
    searchResults.classList.remove('active');
}

function addCustomArtist(artistName) {
    const songs = [];
    for (let i = 1; i <= 3; i++) {
        const song = prompt('Ingresa la canción ' + i + ' de ' + artistName + ':');
        if (song && song.trim()) {
            songs.push(song.trim());
        } else {
            alert('Debes ingresar 3 canciones');
            return;
        }
    }
    
    if (songs.length === 3) {
        selectedArtists[artistName] = {
            name: artistName,
            songs: songs
        };
        updateSelectedList();
        searchBox.value = '';
        searchResults.innerHTML = '';
        searchResults.classList.remove('active');
    }
}

function removeSong(song) {
    selectedItems = selectedItems.filter(s => s !== song);
    updateSelectedList();
}

function removeArtist(artist) {
    delete selectedArtists[artist];
    updateSelectedList();
}

function updateSelectedList() {
    if (currentMode === 'songs') {
        itemCount.textContent = selectedItems.length;
        selectedList.innerHTML = selectedItems.map(song => {
            return '<span class="selected-song">' +
                song +
                '<span class="remove-song" onclick="removeSong(\'' + song.replace(/'/g, "\\'") + '\')">✖</span>' +
                '</span>';
        }).join('');

        startBtn.disabled = selectedItems.length < 4;
        if (selectedItems.length >= 4) {
            startBtn.textContent = '🚀 Iniciar Torneo con ' + selectedItems.length + ' canciones';
        } else {
            startBtn.textContent = '🚀 Iniciar Torneo (mínimo 4 canciones)';
        }
    } else {
        const artistCount = Object.keys(selectedArtists).filter(a => selectedArtists[a].songs.length === 3).length;
        itemCount.textContent = artistCount;
        
        selectedList.innerHTML = Object.keys(selectedArtists)
            .filter(artist => selectedArtists[artist].songs.length === 3)
            .map(artist => {
                const artistData = selectedArtists[artist];
                return '<div class="artist-block">' +
                    '<h4>' + artist + ' <span class="remove-artist" onclick="removeArtist(\'' + artist.replace(/'/g, "\\'") + '\')">✖</span></h4>' +
                    '<div>' + artistData.songs.map(s => '• ' + s).join('<br>') + '</div>' +
                    '</div>';
            }).join('');

        startBtn.disabled = artistCount < 4;
        if (artistCount >= 4) {
            startBtn.textContent = '🚀 Iniciar Torneo con ' + artistCount + ' artistas';
        } else {
            startBtn.textContent = '🚀 Iniciar Torneo (mínimo 4 artistas)';
        }
    }
}

function generateAllRounds() {
    allRounds = [];
    let currentRound;
    
    if (currentMode === 'songs') {
        currentRound = [...selectedItems].sort(() => Math.random() - 0.5);
    } else {
        currentRound = Object.keys(selectedArtists)
            .filter(a => selectedArtists[a].songs.length === 3)
            .sort(() => Math.random() - 0.5);
    }
    
    while (currentRound.length > 1) {
        const matches = [];
        for (let i = 0; i < currentRound.length; i += 2) {
            if (i + 1 < currentRound.length) {
                matches.push({
                    item1: currentRound[i],
                    item2: currentRound[i + 1],
                    winner: null,
                    completed: false
                });
            } else {
                matches.push({
                    item1: currentRound[i],
                    item2: null,
                    winner: currentRound[i],
                    completed: true
                });
            }
        }
        allRounds.push(matches);
        
        const winners = [];
        matches.forEach(m => {
            if (m.item2) {
                winners.push(null);
            } else {
                winners.push(m.winner);
            }
        });
        
        currentRound = winners.filter(w => w !== null);
        if (currentRound.length === 0 && matches.length > 1) {
            currentRound = new Array(Math.ceil(matches.length / 2)).fill(null);
        }
    }
}

function getRoundName(roundIndex) {
    const totalRounds = allRounds.length;
    const remainingRounds = totalRounds - roundIndex;
    
    if (remainingRounds === 1) return '🏆 FINAL';
    if (remainingRounds === 2) return '🥈 SEMIFINALES';
    if (remainingRounds === 3) return '🥉 CUARTOS DE FINAL';
    if (remainingRounds === 4) return '⚡ OCTAVOS DE FINAL';
    return 'RONDA ' + (roundIndex + 1);
}

function displayAllBrackets() {
    const totalItems = currentMode === 'songs' ? selectedItems.length : Object.keys(selectedArtists).filter(a => selectedArtists[a].songs.length === 3).length;
    phaseIndicator.textContent = 'Torneo de ' + totalItems + ' ' + (currentMode === 'songs' ? 'canciones' : 'artistas');
    
    bracketContainer.innerHTML = '';

    allRounds.forEach((round, roundIndex) => {
        const column = document.createElement('div');
        column.className = 'round-column';
        
        const header = document.createElement('div');
        header.className = 'round-header';
        header.textContent = getRoundName(roundIndex);
        column.appendChild(header);

        const matchesContainer = document.createElement('div');
        matchesContainer.className = 'matches-container';
        
        round.forEach((match, matchIndex) => {
            const matchup = document.createElement('div');
            matchup.className = 'matchup';
            matchup.setAttribute('data-round', roundIndex);
            matchup.setAttribute('data-match', matchIndex);
            
            if (match.completed) {
                matchup.classList.add('completed');
            }
            
            if (match.item2) {
                if (currentMode === 'songs') {
                    const parts1 = match.item1.split(' – ');
                    const parts2 = match.item2.split(' – ');
                    const artist1 = parts1[0];
                    const song1 = parts1[1];
                    const artist2 = parts2[0];
                    const song2 = parts2[1];
                    
                    matchup.innerHTML = 
                        '<div class="matchup-number">vs ' + (matchIndex + 1) + '</div>' +
                        '<div class="song-option' + (match.winner === match.item1 ? ' winner' : '') + '" data-item="' + match.item1 + '">' +
                        '<div class="song-artist">' + artist1 + '</div>' +
                        '<div class="song-title">' + song1 + '</div>' +
                        '</div>' +
                        '<div class="song-option' + (match.winner === match.item2 ? ' winner' : '') + '" data-item="' + match.item2 + '">' +
                        '<div class="song-artist">' + artist2 + '</div>' +
                        '<div class="song-title">' + song2 + '</div>' +
                        '</div>';
                } else {
                    const artist1Data = selectedArtists[match.item1];
                    const artist2Data = selectedArtists[match.item2];
                    
                    matchup.innerHTML = 
                        '<div class="matchup-number">vs ' + (matchIndex + 1) + '</div>' +
                        '<div class="artist-option' + (match.winner === match.item1 ? ' winner' : '') + '" data-item="' + match.item1 + '">' +
                        '<div class="song-artist">' + match.item1 + '</div>' +
                        '<div class="artist-songs">' + artist1Data.songs.join(' • ') + '</div>' +
                        '</div>' +
                        '<div class="artist-option' + (match.winner === match.item2 ? ' winner' : '') + '" data-item="' + match.item2 + '">' +
                        '<div class="song-artist">' + match.item2 + '</div>' +
                        '<div class="artist-songs">' + artist2Data.songs.join(' • ') + '</div>' +
                        '</div>';
                }
                
                if (!match.completed && roundIndex === currentRoundIndex) {
                    const options = matchup.querySelectorAll('.song-option, .artist-option');
                    options.forEach(option => {
                        option.addEventListener('click', function() {
                            selectWinner(roundIndex, matchIndex, this);
                        });
                    });
                }
            } else {
                if (currentMode === 'songs') {
                    const parts = match.item1.split(' – ');
                    const artist = parts[0];
                    const song = parts[1];
                    matchup.innerHTML = 
                        '<div class="matchup-number">Pasa directo</div>' +
                        '<div class="song-option winner" data-item="' + match.item1 + '">' +
                        '<div class="song-artist">' + artist + '</div>' +
                        '<div class="song-title">' + song + '</div>' +
                        '</div>';
                } else {
                    const artistData = selectedArtists[match.item1];
                    matchup.innerHTML = 
                        '<div class="matchup-number">Pasa directo</div>' +
                        '<div class="artist-option winner" data-item="' + match.item1 + '">' +
                        '<div class="song-artist">' + match.item1 + '</div>' +
                        '<div class="artist-songs">' + artistData.songs.join(' • ') + '</div>' +
                        '</div>';
                }
            }
            
            matchesContainer.appendChild(matchup);
        });
        
        column.appendChild(matchesContainer);
        bracketContainer.appendChild(column);
    });

    if (allRounds.length > 0 && allRounds[allRounds.length - 1][0].completed) {
        showWinner();
    }
}

function selectWinner(roundIndex, matchIndex, option) {
    const match = allRounds[roundIndex][matchIndex];
    const matchup = document.querySelector('[data-round="' + roundIndex + '"][data-match="' + matchIndex + '"]');
    
    const allOptions = matchup.querySelectorAll('.song-option, .artist-option');
    allOptions.forEach(opt => opt.classList.remove('winner'));
    option.classList.add('winner');
    
    match.winner = option.getAttribute('data-item');
    match.completed = true;
    
    const currentRound = allRounds[roundIndex];
    if (currentRound.every(m => m.completed)) {
        advanceToNextRound(roundIndex);
    }
}

function advanceToNextRound(completedRoundIndex) {
    if (completedRoundIndex + 1 < allRounds.length) {
        const winners = allRounds[completedRoundIndex].map(m => m.winner);
        const nextRound = allRounds[completedRoundIndex + 1];
        
        let winnerIndex = 0;
        nextRound.forEach(match => {
            if (match.item2 && !match.completed) {
                match.item1 = winners[winnerIndex++];
                match.item2 = winners[winnerIndex++];
            }
        });
        
        currentRoundIndex = completedRoundIndex + 1;
        displayAllBrackets();
        
        setTimeout(function() {
            const columns =
