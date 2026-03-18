const input = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const cards = document.querySelectorAll('.rawg-card');
const countEl = document.getElementById('searchCount');
const noResults = document.getElementById('noResults');
const noResultsQuery = document.getElementById('noResultsQuery');

function filterGames() {
    const query = input.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
        const name = card.dataset.name;
        const match = name.includes(query);
        card.style.display = match ? '' : 'none';
        if (match) visible++;
    });

    // Botón limpiar
    clearBtn.style.opacity = query ? '1' : '0';
    clearBtn.style.pointerEvents = query ? 'auto' : 'none';

    // Contador
    if (query) {
        countEl.textContent = `${visible} resultado${visible !== 1 ? 's' : ''}`;
        countEl.style.opacity = '1';
    } else {
        countEl.style.opacity = '0';
    }

    // Sin resultados
    noResults.style.display = (visible === 0 && query) ? 'block' : 'none';
    noResultsQuery.textContent = input.value.trim();
}

input.addEventListener('input', filterGames);

clearBtn.addEventListener('click', () => {
    input.value = '';
    input.focus();
    filterGames();
});