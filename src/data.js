import React from 'react';

export const getData = () =>
    fetch("https://gist.githubusercontent.com/mohammedalhaq/80fc63af2fdea8fb860e2f58934accff/raw/099c906e63cfae19179da6649cd27a097920ccf5/gistfile1.txt")
        .then(response => response.json());

