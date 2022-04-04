<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <div class="nav__container">
            <h1 class="nav__header">My Collection</h1>
            <div class="nav-links">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/collection">Collection</RouterLink>
            </div>
        </div>
    </nav>
</template>