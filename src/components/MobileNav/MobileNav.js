const MobileNav = ({ isOpen }) => {
  return (
    <div className={isOpen ? 'mobile-nav open' : 'mobile-nav'}>
      <ul>
        <li>Tableau de bord</li>
        <li>Commencer une immatriculation</li>
        <li>Liste des immatriculations</li>
        <li>Cartes grises</li>
      </ul>
    </div>
  );
};

export default MobileNav;
