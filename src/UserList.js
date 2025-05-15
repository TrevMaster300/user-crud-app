import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ empNo: '', name: '', surname: '', phone: '', address: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser !== null) {
      const updated = users.map((u, index) => index === editingUser ? form : u);
      setUsers(updated);
      setEditingUser(null);
    } else {
      setUsers([...users, form]);
    }

    setForm({ empNo: '', name: '', surname: '', phone: '', address: '' });
  };

  const handleEdit = (index) => {
    setEditingUser(index);
    setForm(users[index]);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="empNo" placeholder="Employee No" value={form.empNo} onChange={handleChange} required />
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="surname" placeholder="Surname" value={form.surname} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
        <button type="submit">{editingUser !== null ? 'Update' : 'Add'} User</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div className="user-info">
              {user.empNo} - {user.name} {user.surname} | {user.phone} | {user.address}
            </div>
            <div className="user-actions">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
