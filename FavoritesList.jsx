
import React from 'react';

function FavoritesList({ favorites, onRemove }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">المفضلة</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">لا توجد عناصر في المفضلة.</p>
      ) : (
        <ul>
          {favorites.map((item) => (
            <li key={item.name} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <button onClick={() => onRemove(item)} className="text-red-500">إزالة</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;
