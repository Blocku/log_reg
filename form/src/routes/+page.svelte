<header class="w-full h-16 max-w-[88rem] mx-auto px-3 flex justify-between items-center border border-zinc-900">
    <a href="/" class="logo">
        Logo
    </a>
    <div class="md:hidden" >
        <button on:click={handleClick} class="btn btn_menu">
            <svg class="block h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="{icon}" />
            </svg>
        </button>
    
          
    </div>

    <div bind:this={menu} class="md:hidden p-1 space-y-1 absolute right-3 top-12 w-48 rounded-lg bg-white shadow-lg border-2 border-primary-200">
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
    <div class="relative hidden md:flex items-center ml-auto">
        <nav class="text-md leading-6 font-medium text-slate-700" >
            <ul class="flex space-x-8">
                <li>Profile</li>
                <li>Settings</li>
                <li>Log out</li>
            </ul>
        </nav>
    </div>
</header>



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



