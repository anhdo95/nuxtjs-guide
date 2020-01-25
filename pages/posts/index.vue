<template>
  <div>
    A list of users

    <ul>
      <li v-for="user in users" :key="user.id" @click="loadUser(user)">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'users',
  data() {
    return {
      users: [
        { id: 1, name: 'Richard Do' },
        { id: 2, name: 'John Doe' },
      ]
    }
  },
  methods: {
    loadUser(user) {
      this.$router.push({
        name: 'users-id',
        params: {
          id: user.id
        }
      })
    }
  }
}
</script>
