<script lang="ts">
    import {ListBox,ListBoxItem,popup, type PopupSettings} from "@skeletonlabs/skeleton";
	import dayjs from 'dayjs';
	import{filter}from "$lib/stores/filter";


	let period = dayjs().format('a')=='pm'? 'Evening':'morning';


    



const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom', 
	closeQuery: '.listbox-item'
	
};
				
</script>

<header class ="flex justify-between">
    <div>
        <h1 class="text-2xl lg:text-4xl mb-2 text-surface-700">
            Good {period}
        </h1>
        <h2 class="text-m text-surface-600/50">
            {dayjs().format(' dddd D MMMM YYYY')}
        </h2>
    </div>
    
<button class="btn variant-filled w-32 px-3 h-fit py-4 justify-between 
   bg-surface-400" 
use:popup={popupCombobox}>

	<span >{$filter }</span>

	<span class="!m-0">
		<svg 
		class="w-6"
		xmlns="http://www.w3.org/2000/svg" 
		viewBox="0 0 24 24"
		><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
			/></svg>
	</span>
</button>


<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none" >
		<ListBoxItem bind:group={$filter} name="medium" value="All tasks">
            All tasks</ListBoxItem>
		<ListBoxItem bind:group={$filter} name="medium" value="Today's tasks">
            Today's tasks</ListBoxItem>
		
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					
					
</header>