<header class="w-full h-16 px-3 flex justify-between items-center border border-zinc-900">
    <a href="/" class="logo ">
        Logo
    </a>
    <div>
        <!-- <button bind:this={btnMenu} bind:value={btnMenu:any} on:click={handleClick} class="btn btn_menu">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 text-primary-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </button> -->
        <input type="button" class="btn btn_menu" on:click={handleClick} bind:this={btnMenu} bind:value={btnMenuValue}>

          
    </div>

    <div bind:this={menu} class="  p-1 space-y-1 absolute right-0 top-0 mt-12 mr-3 w-48 rounded-lg bg-white shadow-lg border-2 border-primary-200">
        <button class="btn btn_item-menu">
            Profile
        </button>
        <button class="btn btn_item-menu">
            Settings
        </button>
        <div class="w-full border rounded-full border-primary-200"></div>
        <button class="btn btn_item-menu">
            Log out
        </button>
    </div>
</header>



<script lang="ts">
    import { onMount } from 'svelte';

    const textBtnC = `<svg class="block h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>`;

    const textBtnO = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 text-primary-600">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>`

    let menu:any;
    let btnMenu:any;
    let btnMenuValue = '11';

    
    function handleClick(){

        menu.classList.contains("hidden") === true ? menu.classList.remove("hidden") : menu.classList.add("hidden")
    
       
        
    }

</script>













<!-- const textBtnC = `<svg class="block h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>`;

const textBtnO = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 text-primary-600">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>`;
let text; -->



