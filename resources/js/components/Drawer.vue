<template>
    <div>
        <h2 class="text-warning mt-4">Menu</h2>

        <ul class="list-group list-group-flush mt-4">
            <li
                class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                :class="{ 'active': $store.state.menuActive == 1 }"
                v-on:click.prevent="$store.state.menuActive = 1"
            >
                <div><i class="fa fa-envelope-o mr-2"></i> Mensajes</div>
                <span class="fa fa-arrow-right"></span>
            </li>
            <li
                class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                :class="{ 'active': $store.state.menuActive == 2 }"
                v-on:click.prevent="$store.state.menuActive = 2"
            >
                <div><i class="fa fa-user mr-2"></i>Cuenta</div>
                <span class="fa fa-arrow-right"></span>
            </li>
            <li
                class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                :class="{ 'active': $store.state.menuActive == 3 }"
                v-on:click.prevent="$store.state.menuActive = 3"
            >
                <div><i class="fa fa-book mr-2"></i> Portafolio</div>
                <span class="fa fa-arrow-right"></span>
            </li>
            <li
                class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                :class="{ 'active': $store.state.menuActive == 4 }"
                v-on:click.prevent="$store.state.menuActive = 4"
            >
                <div><i class="fa fa-list mr-2"></i>Testimonios</div>
                <span class="fa fa-arrow-right"></span>
            </li>
            <li
                class="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                :class="{ 'active': $store.state.menuActive == 5 }"
                v-on:click.prevent="$store.state.menuActive = 5"
            >
                <div><i class="fa fa-bolt mr-2"></i> Servicios</div>
                <span class="fa fa-arrow-right"></span>
            </li>
        </ul>
    </div>
</template>

