import { reactive } from 'vue'

interface Todo {
  id: number
  text: string
}

interface State {
  todos: Todo[]
  nextid: number
}

const state = reactive<State>({
  todos: [],
  nextid: 1,
})

export function usetodos() {
  const add = (text: string) => {
    if (!text.trim()) return
    state.todos.push({
      id: state.nextid++,
      text: text.trim(),
    })
  }

  const remove = (id: number) => {
    const index = state.todos.findIndex((t) => t.id === id)
    if (index !== -1) {
      state.todos.splice(index, 1)
    }
  }

  return {
    todos: state.todos,
    add,
    remove,
  }
}
