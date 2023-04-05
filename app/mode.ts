async function getMode() {
  
  return localStorage.get('chakra-ui-color-mode');

}

export default function Mode() {
  return getMode;
}
