DROP DATABASE [IF EXISTS] DB;
CREATE DATABASE DB;
    USE DB;

CREATE TABLE APPLICATIONS(
    id int AUTO_INCREMENT,
    entity varchar (255),
    location varchar (255),
    product_module varchar (255),
    product_version varchar (255),
    license_metric varchar (255),
    physical_mn varchar (255),
    active_quantity varchar (255),
    application_projectN varchar (255),
    enviroment_usage varchar (255),
    installation_date varchar (255),
    architecture varchar (255),
    customer_notes varchar (255),
    lms_notes varchar (255),
    primary key (id)
    
);

CREATE TABLE TECHNOLOGY(
    id int AUTO_INCREMENT,
    entity varchar (255),
    location varchar (255),
    product varchar (255),
    license_metric varchar (255),
    physical_mn varchar (255),
    instance_name varchar (255),
    server_make_model varchar (255),
    processor_model_speed varchar (255),
    num_physical_cpus varchar (255),
    num_cores_per_physical_cpu varchar (255),
    virtualization_technology_used varchar (255),
    virtual_machine_name varchar (255),
    num_cores_per_virtual_machin varchar (255),
    active_physical_cpus_system varchar (255),
    partition_type varchar (255),
    entitled_capacity varchar (255),
    online_virtual_cpu varchar (255),
    active_cpus_in_pool varchar (255),
    shared_pool_id varchar (255),
    live_partition_mobility_use varchar (255),
    Oracle_processor_core varchar (255),
    deployed_licenses varchar (255),
    environment_usage varchar (255),
    application_projectN varchar (255),
    installation_date varchar (255),
    domain_clusterN varchar (255),
    machines_in_cluster varchar (255),
    server_purchase_date varchar (255),
    hyperthreading_enabled boolean,
    architecture varchar (255),
    database_connect_string varchar (255),
    product_version varchar (255),
    customer_notes varchar (255),
    oracle_notes varchar (255).
    primary key (id)
 )