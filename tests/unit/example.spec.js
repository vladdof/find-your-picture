import { shallowMount } from '@vue/test-utils';
import SearchResults from '@/views/search-results/search-results.vue';

describe('SearchResults cmp', () => {
  test('renders cmp with right tag prop', () => {
    const tag = 'cat';
    const wrapper = shallowMount(SearchResults, {
      propsData: { tag },
    });

    expect(wrapper.text()).toMatch(tag);
  });
});
