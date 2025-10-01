<script setup lang="ts">
import { ref } from 'vue'
import { usetodos } from './store/todos'

const { todos, add, remove } = usetodos()
const input = ref('')

const handleadd = () => {
  add(input.value)
  input.value = ''
}

const handlekeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    handleadd()
  }
}
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>tasks</h1>

      <div class="input">
        <input
          v-model="input"
          @keydown="handlekeydown"
          type="text"
          placeholder="add task"
        />
        <button @click="handleadd">add</button>
      </div>

      <ul class="list">
        <li v-for="todo in todos" :key="todo.id" class="item">
          <span>{{ todo.text }}</span>
          <button @click="remove(todo.id)" class="delete">delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: black;
}

.content {
  width: 100%;
  max-width: 500px;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 0.1em;
}

.input {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid black;
  background: transparent;
  font-size: 1rem;
  font-family: inherit;
}

input::placeholder {
  color: #999;
}

input:focus {
  outline: none;
  border-width: 2px;
}

button {
  padding: 0.75rem 1.5rem;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.8;
}

.list {
  list-style: none;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.item:first-child {
  border-top: 1px solid #ddd;
}

.delete {
  padding: 0.5rem 1rem;
  background: transparent;
  color: black;
  border: 1px solid black;
  font-size: 0.875rem;
}

.delete:hover {
  background: black;
  color: white;
  opacity: 1;
}
</style>
