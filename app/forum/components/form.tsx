'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';

export default function Form() {
  const [inputText, setInputText] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    fetch('/api/forum', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ contents: inputText }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" htmlFor="input-text">
            Input text
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="input-text"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:shadow-bottom focus:outline-none"
          type="submit"
        >
          보내기
        </button>
      </div>
    </form>
  );
}
