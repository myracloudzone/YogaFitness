var ServiceCtrl = GMApp.controller('ServiceCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
    $scope.courses = [
        {name : "Relationship: The Soulful Loving", color : "#da4800"},
        {name : "Technical Course on Relationship Expert", color : "#bc8f12"},
        {name : "Spiritual Awakening", color : "#000"},
        {name : "Spiritual Mentoring", color : "#00ad91"},
        {name : "Spiritual Tourism (Inbound &amp; Outbound)", color : "#412f8d"},
        {name : "Certificate Course in Counseling with Internship", color : "#4a4a4a"},
        {name : "Master Trainer- Certificate Course in Counseling with Internship", color : "#da8616"},
        {name : "Certificate Course in Competency Mapping with Internship (Project Based)", color : "#da4800"},
        {name : "Whatsappinar on Love and Relationship", color : "#bc8f12"},
        {name : "Whatsappinar on Power of Subconscious Mind", color : "#000"},
        {name : "Whatsappinar on Mindful Parenting", color : "#00ad91"},
        {name : "Ancestral Healing through Mind Sciences", color : "#412f8d"},
        {name : "Internship in Clinical Hypnotherapy", color : "#4a4a4a"},
        {name : "Psychometric Testing", color : "#da8616"},
        {name : "Energik Healing", color : "#ba8712"},
    ];
    $scope.onlineCourses = [
        {name : "Whatsappinar on Love and Relationship", color : "#bc8f12"},
        {name : "Whatsappinar on Power of Subconscious Mind", color : "#000"},
        {name : "Whatsappinar on Mindful Parenting", color : "#00ad91"},
    ];
    $scope.selfCourses = [
        {name : "Relationship: The Soulful Loving", color : "#da4800"},
        {name : "Spiritual Awakening", color : "#000"},
        {name : "Spiritual Mentoring", color : "#00ad91"},
        {name : "Spiritual Tourism (Inbound & Outbound)", color : "#412f8d"},
        {name : "Ancestral Healing through Mind Sciences", color : "#bc8f12"},
    ];
    $scope.professionalCourses = [
        {name : "Certificate Course in Counseling with Internship", color : "#4a4a4a"},
        {name : "Master Trainer- Certificate Course in Counseling with Internship", color : "#da8616"},
        {name : "Certificate Course in Competency Mapping with Internship (Project Based)", color : "#da4800"},
        {name : "Internship in Clinical Hypnotherapy", color : "#00ad91"},
    ];
    

               
}]);