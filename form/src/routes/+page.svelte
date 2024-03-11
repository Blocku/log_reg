<header class="w-full h-16 fixed top-0 right-0 left-0 border-b-2 border-primary-200 backdrop-blur-sm">
    <div class="h-full max-w-[88rem] mx-auto flex justify-between items-center px-3">
        <a href="/" class="logo">
            <img class="h-10 w-10" src="../../Svelte_Logo.png" alt="logo">
        </a>
        <div class="md:hidden" >
            <button on:click={handleClick} class="btn btn_menu">
                <svg class="block h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="{icon}" />
                </svg>
            </button>
        
              
        </div>
    
        <div bind:this={menu} class="hidden md:hidden p-1 space-y-1 absolute right-3 top-12 w-48 rounded-lg bg-white shadow-lg border-2 border-primary-200">
            <button class="btn btn_item-menu">
                Profile
            </button>
            <button class="btn btn_item-menu">
                Settings
            </button>
            <div class="w-max border rounded-full border-primary-200"></div>
            <button class="btn btn_item-menu">
                Log out
            </button>
        </div>
        <div class="relative hidden md:flex items-center ml-auto">
            <nav class="text-md leading-6 font-medium text-slate-700" >
                <ul class="flex space-x-8">
                    <li class=" hover:text-orange-500 transition-all">
                        <a href="/">Profile</a>
                    </li>
                    <li class=" hover:text-orange-500 transition-all">
                        <a href="/">Settings</a>
                    </li>
                    <li class=" hover:text-orange-500 transition-all">
                        <a href="/">Log out</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    
</header>



<main class="w-wull h-[300dvh] mt-28 flex gap-10 border border-zinc-500">
    <section class=" break-all shadow-lg">
dfdsafdsafsadfsadfasdfadsfdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </section>

</main>



<script lang="ts">

    let menu:any;

    let icon = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5";

    
    function handleClick(){
        if(menu.classList.contains("hidden") === true){
            menu.classList.remove("hidden")
            icon = "m19.5 8.25-7.5 7.5-7.5-7.5"
        }else{
            menu.classList.add("hidden")
            icon = "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        }      
    }

</script>















<!-- const textBtnC = `<svg class="block h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>`;

const textBtnO = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 text-primary-600">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>`;
let text; -->



