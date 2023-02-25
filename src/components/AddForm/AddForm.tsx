import React, { FormEvent, useState } from 'react';
import { geocode } from '../../utils/geocoding';
import { Button } from '../common/Button';

import './AddForm.css';

export const AddForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    url: '',
    address: '',
  });

  const saveAd = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { lat, lng } = await geocode(form.address);

      const res = await fetch(`http://localhost:3001/ad`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          lat,
          lng,
        }),
      });
      const data = await res.json();
      console.log(data);

      setId(data.id);
    } finally {
      setLoading(false);
    }
  };

  const updateForm = (key: string, value: any) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  };

  if (loading) {
    return <h2>Własnie dodajemy twoje ogłoszenie...</h2>;
  }

  if (id) {
    return <h2>Ogłoszenie "{form.name}" zostało dodane.</h2>;
  }

  return (
    <form className="form" onSubmit={saveAd}>
      <p>
        <label>Nazwa</label>
        <input
          type="text"
          name="name"
          required
          maxLength={99}
          value={form.name}
          onChange={e => updateForm('name', e.target.value)}
        />
      </p>
      <p>
        <label>Opis</label>
        <textarea
          name="description"
          required
          maxLength={999}
          value={form.description}
          onChange={e => updateForm('description', e.target.value)}
        />
      </p>
      <p>
        <label>Cena</label>
        <input
          type="number"
          name="price"
          maxLength={99}
          value={form.price}
          onChange={e => updateForm('price', Number(e.target.value))}
        />
      </p>
      <p>
        <label>URL</label>
        <input
          type="url"
          name="url"
          maxLength={99}
          value={form.url}
          onChange={e => updateForm('url', e.target.value)}
        />
      </p>
      <p>
        <label>Adres</label>
        <input
          type="text"
          name="address"
          required
          value={form.address}
          onChange={e => updateForm('address', e.target.value)}
        />
      </p>
      <Button text="Dodaj" />
    </form>
  );
};
